import { Header } from "../StaticComponents/Header";
import { SideBar } from "../StaticComponents/SideBar";
import "../../Styles/StaticComponents/Global.css"
import "../../Styles/Home/Home.css"
import { Card } from "../StaticComponents/Card";
export function Home() {
    return(
        <div className="container">
            <Header />
            <SideBar />
            <div className="content"> 
                <div className="card-container">
                    <div className="row">
                    <Card cardTitle="دارو ها" cardCount="2000"/>
                    <Card cardTitle="فاکتور ها" cardCount="1000"/>
                    <Card cardTitle="مشتریان" cardCount="2000"/>
                    </div>

                    <div className="row">
                    <Card cardTitle="اسناد" cardCount="3000"/>
                    <Card cardTitle="گدام ها" cardCount="1000"/>
                    <Card cardTitle="کاربران" cardCount="5"/>
                    </div>
                  
                </div>
            </div>
        </div>
    )
}