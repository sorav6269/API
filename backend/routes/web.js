const express = require('express')
const tendercontroller = require('../Controller/tenderController')
const usercontroller = require('../Controller/Usercontroller')
const studentcontroller = require('../Controller/studentcontroller')
const route = express.Router()


// tender 

route.post('/tenderInsert',tendercontroller.tenderInsert)
route.get('/Tender_get',tendercontroller.Tender_get)
route.get('/Tender_view/:id',tendercontroller.Tender_view)
route.put('/Tender_update/:id',tendercontroller.Tender_update)
route.get('/tender_delete/:id',tendercontroller.tender_delete)


// student
route.post('/studentInsert',studentcontroller.studentInsert)
route.get('/studentDispaly',studentcontroller.studentDispaly)
route.get('/studentview/:id',studentcontroller.studentview)
route.put('/studentupdate/:id',studentcontroller.studentupdate)
route.get('/studentdelete/:id',studentcontroller.studentdelete)

// user
 route.post('/User_insert',usercontroller.User_insert)
 route.get('/User_display',usercontroller.User_display)



module.exports = route