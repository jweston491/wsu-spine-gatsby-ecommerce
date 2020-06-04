/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
exports.onInitialClientRender = () => {
    const s = document.createElement('script')
    s.type = `text/javascript`
    s.src = '//repo.wsu.edu/spine/1/spine.min.js'
    document.getElementsByTagName(`head`)[0].appendChild(s)
 
    console.log("ReactDOM.render has executed")
  }