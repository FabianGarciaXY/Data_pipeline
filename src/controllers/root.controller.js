/*
* Here is defined the function to execute for root rout 
*
* Function:
* @Description: This function just return a message when route / is request
*/


// Exporting function.
exports.root = (req, res) => {
	try {
		return res.status(200).json({ 'message': 'Hi world!'});
	} catch (err) {
		return res.status(500).json(err);
	}
};