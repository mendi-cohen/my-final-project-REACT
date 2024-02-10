import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LayoutHome from '../Layout/Layout';
import ShowUsers from '../components/Admin/ShowUsers_Comp';
import ShowLogs from '../components/Admin/ShowLogin_Comp';
import EmailForm from '../components/Admin/SendEmail_Comp';
import WordFile from '../components/Admin/Word_Comp';
import GetArticle from '../components/Lyout_Comp/article/GetArticle';
import ArticleMenu from '../components/Lyout_Comp/article/ArticleMenu';
import SendQuestion from '../components/Lyout_Comp/Questions/SendQuestion';
import UserQuest from '../components/Admin/UsersQuestions';
import WhatsApp  from '../components/Admin/WhatsApp';
import EnswerToUser from '../components/Admin/EnswerToUser';



const MyRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LayoutHome/>}>
          {/* איזור המנהל */}
          <Route path="allUsers" element={<ShowUsers/>}/>
            <Route path="allLogin" element={<ShowLogs/>}/>
            <Route path="writeArticel" element={<WordFile/>}/>
            <Route path="enswerToUsers" element={<UserQuest/>}/>
            <Route path="sendEmail" element={<EmailForm/>}/>
            <Route path="sendWhatsApp" element={<WhatsApp/>}/>
            <Route path="sendEnswer" element={<EnswerToUser/>}/>
            {/*  */}

            {/* {איזור המאמרים בקוד} */}
            <Route path="ArticleMenu" element={<ArticleMenu/>}/>
            <Route path="ArticleMenu/GetParsha" element={<GetArticle Type = {'פרשת שבוע'} headerOfArt= {'מאמרי פרשת שבוע'}/>}/>
            <Route path="ArticleMenu/GetHalacha" element={<GetArticle Type = {'הלכה'} headerOfArt={"מאמרי הלכה"}/>} />
            <Route path="ArticleMenu/GetTheDayTask" element={<GetArticle Type = {'ענייני דיומא'} headerOfArt={"מאמרי ענייני היום"}/>}/>
            <Route path="ArticleMenu/GetHashkafa" element={<GetArticle Type = {'השקפה'} headerOfArt={" מאמרי השקפה" }/>}/>
            {/*  */}
            
            {/* איזור השאלות בקוד */}
            <Route path="questionsMenu" element={<SendQuestion/>}/>
            {/* שליחת וואצאפ */}


        </Route>
      </Routes>
    </Router>
  );
}

export default MyRouter;
