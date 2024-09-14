const studentmodel = require('../model/student')
class studentcontroller {
    static studentInsert = async (req, res) => {
        try {
            const { name, email } = req.body
            const result = new studentmodel({
                name: name,
                email: email
            })
            const data = await result.save()
            res.status(200).json({ status: "success", message: "registration successfull", data })
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: error })
        }
    }
    static studentDispaly = async (req, res) => {
        try {
            const data = await studentmodel.find()
            res.status(200).json(data)
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: error })
        }
    }
    static studentview = async (req, res) => {
        try {

            const data = await studentmodel.findById(req.params.id)
            res.status(200).json(data)
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: error })
        }
    };

    static studentupdate = async (req, res) => {
        try {

            const { name, email } = req.body
            const data = await studentmodel.findByIdAndUpdate(req.params.id, {
                name: name,
                email: email
            })
            res.status(200).json({ message: "Update successfull",data})
        } catch (error) {
            res.status(500).json({ error: error })
        }
    };
    static studentdelete = async (req, res) => {
        try {

            await studentmodel.findByIdAndDelete(req.params.id)
            res.status(200).json({ message: "delete successfull" })
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: error })
        }
    };
}

module.exports = studentcontroller