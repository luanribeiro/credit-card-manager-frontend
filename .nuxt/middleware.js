const middleware = {}

middleware['admin'] = require('../middleware/admin.js')
middleware['admin'] = middleware['admin'].default || middleware['admin']

middleware['auth'] = require('../middleware/auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['login-middleware'] = require('../middleware/login-middleware.js')
middleware['login-middleware'] = middleware['login-middleware'].default || middleware['login-middleware']

export default middleware
