export default function (conf) {
  const {
    scpNonce = 'himself65',
    // eslint-disable-next-line
    theme = {}
  } = conf
  return {
    name: 'appable',
    data () {
      return {
        options: {
          cspNonce: scpNonce
        },
        generatedStyles: undefined
      }
    },

    watch: {
      generatedStyles () {
        this.applyTheme()
      }
    },

    async created () {
      this.generatedStyles = await this.genTheme()
      await this.genStyle()
      this.applyTheme()
    },

    methods: {
      async genTheme () {
        let css
        // todo
        return css
      },

      async genStyle () {
        let style = document.getElementById('kuen-theme-stylesheet')

        if (!style) {
          style = document.createElement('style')
          style.type = 'text/css'
          style.id = 'kuen-theme-stylesheet'
          if (this.options.cspNonce) {
            style.setAttribute('nonce', this.options.cspNonce)
          }
          document.head.appendChild(style)
        }
        this.style = style
      },

      applyTheme () {
        if (this.style) this.style.innerHTML = this.generatedStyles
      }
    }
  }
}
