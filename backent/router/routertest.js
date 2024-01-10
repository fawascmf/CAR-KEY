const express=require("express")
const usercreate = require("../functions/creatfunctions/usercreating")
const admnlogin = require("../functions/loginfunctions/adminlogin")
const userlogin = require("../functions/loginfunctions/userlogin")
const userview = require("../functions/getfunctions/userview")
const deleteuser = require("../functions/crud/Deleteuser")
const hundaicreate = require("../functions/creatfunctions/hundaicreat")
const suzukicreate = require("../functions/creatfunctions/suzukicreat")
const tatacreate = require("../functions/creatfunctions/tatacreat")
const tataview = require("../functions/getfunctions/tataview")
const suzukiview = require("../functions/getfunctions/suzukiview")
const hundaiview = require("../functions/getfunctions/hundaiview")
const admincreate=require("../functions/creatfunctions/admincreate")
const deletehundaiprodect = require("../functions/crud/deletehundai")
const deletesuzukiprodecct = require("../functions/crud/deletesuzuki")
const deletetataprodect = require("../functions/crud/deletetata")
// const getbookings = require("../functions/getfunctions/getbooking")
// const confirmbookings = require("../functions/getfunctions/getbokingbyid")
const ubdatetata = require("../functions/crud/edittata")
const ubdatesuzuki = require("../functions/crud/editsuzuki")
const ubdatehundai = require("../functions/crud/edithundai")
const tataget = require("../functions/getfunctions/gettata")
const suzukiget = require("../functions/getfunctions/getsuzuki")
const hundaiget = require("../functions/getfunctions/gethundai")
const tatadetil = require("../functions/getfunctions/tatadetilpage")
const suzukidetil = require("../functions/getfunctions/suzukidtilpage")
const hundaidetil = require("../functions/getfunctions/hundaidetilpage")
const getbookcardbyhundai = require("../functions/getfunctions/mybookingcardhundai")
const createbookinghundai = require("../functions/creatfunctions/bookingcreathundai")
const createbookingsuzuki= require("../functions/creatfunctions/bookingcreatsuzuki")
const createbookingtata= require("../functions/creatfunctions/bookingcreatata")
const getbookingsbyuser = require("../functions/getfunctions/mybokkingshundai")
const deletebookingsbyuserhundai = require("../functions/crud/deletebookingbyuserhundai")





const router=express.Router()

router.route("/usersignup").post(usercreate)
router.route("/hundaiproductcreat").post(hundaicreate)
router.route("/suzukiproductcreat").post(suzukicreate)
router.route("/tataproductcreat").post(tatacreate)
router.route("/adminlogin").post(admnlogin)
router.route("/userlogin").post(userlogin)
router.route("/userview").get(userview)
router.route('/userdelete/:id').delete(deleteuser)
router.route("/tataview").get(tataview)
router.route("/suzukiview").get(suzukiview)
router.route("/hundaiview").get(hundaiview)
router.route("/admincreate").post(admincreate)
router.route('/deletehundai/:id').delete(deletehundaiprodect)
router.route('/deletesuzuki/:id').delete(deletesuzukiprodecct)
router.route('/deletetata/:id').delete(deletetataprodect)
router.route("/creatbookinghundai").post(createbookinghundai)
router.route("/creatbookingtata").post(createbookingtata)
router.route("/creatbookingsuzuki").post(createbookingsuzuki)
// router.route("/getbooking").get(getbookings)
// router.route('/confirmbookings/:id').get(confirmbookings)
router.route('/ubdatetata/:id').put(ubdatetata)
router.route('/ubdatesuzuki/:id').put(ubdatesuzuki)
router.route('/ubdatehundai/:id').put(ubdatehundai)
router.route('/tataget/:id').get(tataget);
router.route('/suzukiget/:id').get(suzukiget);
router.route('/hundaiget/:id').get(hundaiget);
router.route('/tatadetil/:id').get(tatadetil);
router.route('/suzukidetil/:id').get(suzukidetil);
router.route('/hundaidetil/:id').get(hundaidetil);
router.route('/bookcardhundai/:id').get(getbookcardbyhundai);
router.route('/bookingbyuser/:id').get(getbookingsbyuser);
router.route('/deletebookingbyuserhundai/:id').delete(deletebookingsbyuserhundai);



module.exports=router