import type { UserConfigExport } from '@tarojs/cli'

export default {
  logger: {
    quiet: false,
    stats: false,
  },
  mini: {},
  h5: {
    devServer: {
      client: {
        overlay: {
          errors: true,
          warnings: false,
        },
      },
    },
  },
} satisfies UserConfigExport<'webpack5'>
