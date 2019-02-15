import { Options as CreatorOptions } from 'ts-creator'

export type PlaygroundOptions = CreatorOptions & {
  readonly: boolean
}

export type UpdateOptionsCallback<
  T extends PlaygroundOptions = PlaygroundOptions,
  K extends keyof T = keyof T
> = (key: keyof T, value: T[K]) => void

export { CreatorTarget } from 'ts-creator'
