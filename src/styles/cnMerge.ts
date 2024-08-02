import type { CxOptions } from 'class-variance-authority'
import { cx } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

export const cnMerge = (...inputs: CxOptions) => twMerge(cx(inputs))
