import { Header } from "../StaticComponents/Header";
import { SideBar } from "../StaticComponents/SideBar";
import "../../Styles/Factors/Factors.css"
export function BuyFactor() {
    return(
        <div className="container">
            <Header />
            <SideBar />
            <div className="content">
                <div className="buyFactor-container">
                    <div className="factor-header">
                        <div className="header-row">
                            <div className="group">
                                <span>طرف حساب</span>
                                <input type="text" />
                            </div>
                            {/* <div className="group">
                                <span>کد</span>
                                <span>00023</span>
                            </div> */}
                            <div className="group">
                                <span>تلفن</span>
                                <span>0098790883362</span>
                            </div>
                            <div className="group">
                                <span>شماره فاکتور</span>
                                <span>12340</span>
                            </div>
                        </div>
                        <div className="header-row">
                            <div className="group">
                                <span>آدرس</span>
                                <span>مارکت ابن سینا</span>
                            </div>
                            <div className="group">
                                <span>مانده</span>
                                <span>91388  بد</span>
                            </div>
                            <div className="group">
                                <span>تاریخ</span>
                                <span>1401 / 02 / 15</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}