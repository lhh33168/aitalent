import Vue from 'vue'
import VueRouter from 'vue-router'
// import http from '../utils/HttpClient'

import Home from '../components/home/home.vue'
import Login from '../components/login/login.vue'
import Register from '../components/register/register.vue'
import Message from '../components/message/message.vue'
import Center from '../components/centers/personCenter.vue'
import Kpin from '../components/kpin/kpin.vue'
import ArtDetail from '../components/message/article_detail.vue'
import KpinDetail from '../components/kpin/kpin_detail.vue'
import Collegeclubs from '../components/collegeClubs/collegeClubs.vue'
import Student from '../components/students/students.vue'

import ClubLibrary from '../components/clubLibrary/clubLibrary.vue'
import clubKnowledge from '../components/clubLibrary/clubKnowledge.vue'
import clubResearch from '../components/clubLibrary/clubResearch.vue'
import internshipInformation from '../components/clubLibrary/internshipInformation.vue'
import latestNews from '../components/clubLibrary/latestNews.vue'

import ApplicationForm from '../components/applicationForm/applicationForm.vue'
import classRecordsAndCourseEnquiries from '../components/applicationForm/classRecordsAndCourseEnquiries.vue'
import collegeIsIntroduced from '../components/applicationForm/collegeIsIntroduced.vue'
import courseOverview from '../components/applicationForm/courseOverview.vue'
import paymentConfirmationAndRecordEnquiry from '../components/applicationForm/paymentConfirmationAndRecordEnquiry.vue'

import AIcollege from '../components/aiCollege/aiCollege.vue'
import Trainingcourses from '../components/aiCollege/trainingcourses/trainingcourses.vue'
import Progressionandtime from '../components/aiCollege/progressionAndTime/progressionAndTime.vue'
import Speciallytrainedservice from '../components/aiCollege/speciallyTrainedService/speciallyTrainedService.vue'
import TeacherIntroduction from '../components/aiCollege/teacherIntroduction/teacherIntroduction.vue'

import studentstandard from '../components/studentStandard/studentStandard.vue'
import Thefirstorderstudents from '../components/studentStandard/Thefirstorderstudents.vue'
import Thesecondorderstudents from '../components/studentStandard/Thesecondorderstudents.vue'
import cultivatesstudents from '../components/studentStandard/cultivatesstudents.vue'
import Studentsapplyfor from '../components/studentStandard/Studentsapplyfor.vue'

import Studentserviceinformation from '../components/studentServiceInformation/studentServiceInformation.vue'
import TrainingServices from '../components/studentServiceInformation/TrainingServices.vue'
import Internshipservices from '../components/studentServiceInformation/Internshipservices.vue'
import Recommendedwork from '../components/studentServiceInformation/Recommendedwork.vue'

import studentwelfare from '../components/studentWelfare/studentWelfare.vue'
import Firstorderstudentwelfare from '../components/studentWelfare/Firstorderstudentwelfare.vue'
import Secondorderstudentwelfare from '../components/studentWelfare/Secondorderstudentwelfare.vue'
import cultivateswelfare from '../components/studentWelfare/cultivateswelfare.vue'

import greatCoffee from '../components/greatCoffee/greatCoffee.vue'
import forumNotice from '../components/forumNotice/forumNotice.vue'
import submitTicket from '../components/submitTicket/submitTicket.vue'
import pastEvents from '../components/pastEvents/pastEvents.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	routes: [{
		path: '/',
		name: 'home',
		component: Home,
		redirect:'/message',
		children:[
                {path:'/message',component:Message},
                {path:'/personCenter',name: 'personCenter',component: Center},
                {path:'/kpin',name: 'kpin',component: Kpin},
                {path:'/artDetail',name: 'artDetail',component: ArtDetail},
                {path:'/kpinDetail',name: 'kpinDetail',component: KpinDetail},
                {path:'/collegeclubs',name: 'collegeclubs',component: Collegeclubs},
                {path:'/students',name: 'students',component: Student},
                {path:'/AIcollege',name: 'AIcollege',component: AIcollege},
                {path:'/ApplicationForm',name: 'ApplicationForm',component: ApplicationForm},
                {path:'/classRecordsAndCourseEnquiries',name: 'classRecordsAndCourseEnquiries',component: classRecordsAndCourseEnquiries},
                {path:'/collegeIsIntroduced',name: 'collegeIsIntroduced',component: collegeIsIntroduced},
                {path:'/courseOverview',name: 'courseOverview',component: courseOverview},
                {path:'/paymentConfirmationAndRecordEnquiry',name: 'paymentConfirmationAndRecordEnquiry',component: paymentConfirmationAndRecordEnquiry},
                {path:'/ClubLibrary',name: 'ClubLibrary',component: ClubLibrary},
                {path:'/clubKnowledge',name: 'clubKnowledge',component: clubKnowledge},
                {path:'/clubResearch',name: 'clubResearch',component: clubResearch},
                {path:'/internshipInformation',name: 'internshipInformation',component: internshipInformation},
                {path:'/latestNews',name: 'latestNews',component: latestNews},
                {path:'/Trainingcourses',name: 'Trainingcourses',component: Trainingcourses},
                {path:'/Progressionandtime',name: 'Progressionandtime',component: Progressionandtime},
                {path:'/Speciallytrainedservice',name: 'Speciallytrainedservice',component: Speciallytrainedservice},
                {path:'/TeacherIntroduction',name: 'TeacherIntroduction',component: TeacherIntroduction},
                {path:'/greatCoffee',name: 'greatCoffee',component: greatCoffee},
                {path:'/forumNotice',name: 'forumNotice',component: forumNotice},
                {path:'/submitTicket',name: 'submitTicket',component: submitTicket},
                {path:'/pastEvents',name: 'pastEvents',component: pastEvents},
                {path:'/Studentserviceinformation',name: 'Studentserviceinformation',component: Studentserviceinformation,redirect:'/TrainingServices',
                children:[
                        {path:'/TrainingServices',name: 'TrainingServices',component: TrainingServices},
                        {path:'/Internshipservices',name: 'Internshipservices',component: Internshipservices},
                        {path:'/Recommendedwork',name: 'Recommendedwork',component: Recommendedwork},
                    ]
            },
                {path:'/studentwelfare',name: 'studentwelfare',component: studentwelfare,redirect:'/Firstorderstudentwelfare',
                children:[
                        {path:'/Firstorderstudentwelfare',name: 'Firstorderstudentwelfare',component: Firstorderstudentwelfare},
                        {path:'/Secondorderstudentwelfare',name: 'Secondorderstudentwelfare',component: Secondorderstudentwelfare},
                        {path:'/cultivateswelfare',name: 'cultivateswelfare',component: cultivateswelfare},
                    ]
            },
                {path:'/studentstandard',name: 'studentstandard',component: studentstandard,redirect:'/Thefirstorderstudents',
                    children:[
                        {path:'/Thefirstorderstudents',name: 'Thefirstorderstudents',component: Thefirstorderstudents},
                        {path:'/Thesecondorderstudents',name: 'Thesecondorderstudents',component: Thesecondorderstudents},
                        {path:'/cultivatesstudents',name: 'cultivatesstudents',component: cultivatesstudents},
                        {path:'/Studentsapplyfor',name: 'Studentsapplyfor',component: Studentsapplyfor},
                    ]
                },
            ]},
        {path:'/login',name: 'login',component: Login},
        {path:'/register',name: 'register',component: Register}
	]
})

// 对将要进入的路由进行权判断
// router.beforeEach((to, from, next) =>{
// 	console.log(Vue);
// 	if(to.path.indexOf('login') < 0 && !window.localStorage.getItem('access_token')){
// 		router.replace('login');
		
// 	} 
// 	next();
// })

export default router