/**
 * based on https://github.com/prettier/prettier/blob/8ac0a731a42c9e7aeb13c5550ded0a1ddf60adee/website/playground/WorkerApi.js
 */

/**
 * create worker methods
 * @param source source file url
 */
const createWorker = (source: string) => {
  const worker = new Worker(source)
  let counter = 0
  const handlers: {
    [id: number]: [(value?: any | PromiseLike<any>) => void, (reason?: any) => void]
  } = {}

  worker.addEventListener('message', (event: MessageEvent) => {
    const { uid, message, error } = event.data

    if (!handlers[uid]) {
      return
    }

    const [resolve, reject] = handlers[uid]
    delete handlers[uid]

    if (error) {
      reject(error)
    } else {
      resolve(message)
    }
  })

  const postMessage = (message: any) => {
    const uid = ++counter
    return new Promise((resolve, reject) => {
      handlers[uid] = [resolve, reject]
      worker.postMessage({ uid, message })
    })
  }

  return {
    transform(code: string) {
      return postMessage({ type: 'transform', code })
    },
    postMessage,
  }
}

export default createWorker
