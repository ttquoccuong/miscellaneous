import ComponentName from 'components/ComponentName.vue'

export default async ({ Vue }) => {
	// Register one by one
	Vue.component(ComponentName, ComponentName)
	
	// Register all in folder
	const req = require.context('components/common/', true, /\.(js|vue)$/i)
	await req.keys().map(key => {
		const componentConfig = req(key)
		const fileName = key.match(/\w+/)[0]

		Vue.component(fileName, componentConfig.default || componentConfig)
	})
}
