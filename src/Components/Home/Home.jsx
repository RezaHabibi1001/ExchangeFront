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
                        <div className="card-parent"><Card cardTitle="دارو ها" cardCount="2000" cardImg="drug.png"/></div>
                        <div className="card-parent"><Card cardTitle="فاکتور ها" cardCount="1000" cardImg="factors.png"/></div>
                        <div className="card-parent"><Card cardTitle="مشتریان" cardCount="2000" cardImg="customers.png"/></div>
                    </div>

                    <div className="row">
                        <div className="card-parent"><Card cardTitle="اسناد" cardCount="3000" cardImg="bills.png" /></div>
                        <div className="card-parent"><Card cardTitle="گدام ها" cardCount="1000" cardImg="stacks.png" /></div>
                        <div className="card-parent"><Card cardTitle="کاربران" cardCount="5" cardImg="users.png" /></div>
                    </div>
                  
                </div>
            </div>
        </div>
    )
}