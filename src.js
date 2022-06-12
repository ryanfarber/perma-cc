


const Logger = require("@ryanforever/logger")
const logger = new Logger(__filename, {debug: true})
const axios = require("axios")



let endpoints = {
	archives: "http://api.udmpermatest.northeurope.cloudapp.azure.com/v1/public/archives/?",
}



function Perma(config = {}) {


	const apiKey = config.apiKey || config.key
	// if (!apiKey) throw new ERROR("MISSING_API_KEY")



	this.getAllPublicArchives = async function() {
		// console.log(endpoints.archives)
		let res = await axios.get(endpoints.archives).catch(err => {throw new Error(err)})
		let data = res.data
		console.log(data)
	}





}




class ERROR extends Error {
	constructor(input) {
		super()

		this.name = "PERMA.CC ERROR"
		const type = {
			MISSING_API_KEY: "please enter your [apiKey]. it can be found..."
		}


		if (type[input]) {
			this.message = type[input]
			this.code = input
		} else if (typeof input === "object") {
			this.name = "PERMA.CC API ERROR"
			this.message = "..."
		} else {
			this.message = input
		}
	}
}




const perma = new Perma({
	apiKey: "fdsaf"
})


perma.getAllPublicArchives()






module.exports = Perma