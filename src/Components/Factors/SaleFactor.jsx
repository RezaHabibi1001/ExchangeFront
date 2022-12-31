import { Header } from "../StaticComponents/Header";
import { SideBar } from "../StaticComponents/SideBar";
import "../../Styles/Factors/Factors.css"
export function SaleFactor() {
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
                                <select name="customer" id="customer">
                                    <option value="">احمد</option>
                                    <option value="">احمد</option>
                                    <option value="">احمد</option>
                                    <option value="">احمد</option>
                                    <option value="">احمد</option>
                                </select>
                            </div>
                            <div className="group">
                                <span>تلفن</span>
                                <span>0098790883362</span>
                            </div>
                            <div className="group">
                                <span>شماره فاکتور</span>
                                <span>12340</span>
                            </div>
                            <span className="btn btn-save">ثبت فاکتور</span>
                        </div>
                        <div className="header-row">
                            <div className="group">
                                <span>آدرس</span>
                                <span>مارکت ابن سینا</span>
                            </div>
                            <div className="group">
                                <span>مانده</span>
                                <span>91388 <span style={{color:"tomato"}}>بده</span> </span>
                            </div>
                            <div className="group">
                                <span>تاریخ</span>
                                <span>1401 / 02 / 15</span>
                            </div>
                            <span className="btn btn-print">چاپ فاکتور</span>
                        </div>
                    </div>
                    <div className="factor-container">
                        <form action="#">
                            <div className="factor-heading">
                                <span>ردیف</span>
                                <span>نوعیت</span>
                                <span>نام</span>
                                <span>کمپنی</span>
                                <span>کشور</span>
                                <span>تعداد</span>
                                <span>فی</span>
                                <span>جمع</span>
                                <span>شرح دارو</span>
                            </div>
                            <div className="factor-content">
                                <div className="factor-content__row">
                                    <input type="text" className="firstRow"/>
                                    <input type="text" className="firstRow"/>
                                    <input type="text" className="firstRow"/>
                                    <input type="text" className="firstRow"/>
                                    <input type="text" className="firstRow"/>
                                    <input type="text" className="firstRow"/>
                                    <input type="text" className="firstRow"/>
                                    <input type="text" className="firstRow"/>
                                    <input type="text" className="firstRow"/>
                                </div>
                                <div className="factor-content__row">
                                    <input type="text" className="secondRow"/>
                                    <input type="text" className="secondRow"/>
                                    <input type="text" className="secondRow"/>
                                    <input type="text" className="secondRow"/>
                                    <input type="text" className="secondRow"/>
                                    <input type="text" className="secondRow"/>
                                    <input type="text" className="secondRow"/>
                                    <input type="text" className="secondRow"/>
                                    <input type="text" className="secondRow"/>
                                </div>
                                <div className="factor-content__row">
                                    <input type="text" className="firstRow"/>
                                    <input type="text" className="firstRow"/>
                                    <input type="text" className="firstRow"/>
                                    <input type="text" className="firstRow"/>
                                    <input type="text" className="firstRow"/>
                                    <input type="text" className="firstRow"/>
                                    <input type="text" className="firstRow"/>
                                    <input type="text" className="firstRow"/>
                                    <input type="text" className="firstRow"/>
                                </div>
                                <div className="factor-content__row">
                                    <input type="text" className="secondRow"/>
                                    <input type="text" className="secondRow"/>
                                    <input type="text" className="secondRow"/>
                                    <input type="text" className="secondRow"/>
                                    <input type="text" className="secondRow"/>
                                    <input type="text" className="secondRow"/>
                                    <input type="text" className="secondRow"/>
                                    <input type="text" className="secondRow"/>
                                    <input type="text" className="secondRow"/>
                                </div>
                                <div className="factor-content__row">
                                    <input type="text" className="firstRow"/>
                                    <input type="text" className="firstRow"/>
                                    <input type="text" className="firstRow"/>
                                    <input type="text" className="firstRow"/>
                                    <input type="text" className="firstRow"/>
                                    <input type="text" className="firstRow"/>
                                    <input type="text" className="firstRow"/>
                                    <input type="text" className="firstRow"/>
                                    <input type="text" className="firstRow"/>
                                </div>
                                <div className="factor-content__row">
                                    <input type="text" className="secondRow"/>
                                    <input type="text" className="secondRow"/>
                                    <input type="text" className="secondRow"/>
                                    <input type="text" className="secondRow"/>
                                    <input type="text" className="secondRow"/>
                                    <input type="text" className="secondRow"/>
                                    <input type="text" className="secondRow"/>
                                    <input type="text" className="secondRow"/>
                                    <input type="text" className="secondRow"/>
                                </div>
                                <div className="factor-content__row">
                                    <input type="text" className="firstRow"/>
                                    <input type="text" className="firstRow"/>
                                    <input type="text" className="firstRow"/>
                                    <input type="text" className="firstRow"/>
                                    <input type="text" className="firstRow"/>
                                    <input type="text" className="firstRow"/>
                                    <input type="text" className="firstRow"/>
                                    <input type="text" className="firstRow"/>
                                    <input type="text" className="firstRow"/>
                                </div>
                                <div className="factor-content__row">
                                    <input type="text" className="secondRow"/>
                                    <input type="text" className="secondRow"/>
                                    <input type="text" className="secondRow"/>
                                    <input type="text" className="secondRow"/>
                                    <input type="text" className="secondRow"/>
                                    <input type="text" className="secondRow"/>
                                    <input type="text" className="secondRow"/>
                                    <input type="text" className="secondRow"/>
                                    <input type="text" className="secondRow"/>
                                </div>
                                
                                <div className="factor-content__row">
                                    <input type="text" className="firstRow"/>
                                    <input type="text" className="firstRow"/>
                                    <input type="text" className="firstRow"/>
                                    <input type="text" className="firstRow"/>
                                    <input type="text" className="firstRow"/>
                                    <input type="text" className="firstRow"/>
                                    <input type="text" className="firstRow"/>
                                    <input type="text" className="firstRow"/>
                                    <input type="text" className="firstRow"/>
                                </div>
                                <div className="factor-content__row">
                                    <input type="text" className="secondRow"/>
                                    <input type="text" className="secondRow"/>
                                    <input type="text" className="secondRow"/>
                                    <input type="text" className="secondRow"/>
                                    <input type="text" className="secondRow"/>
                                    <input type="text" className="secondRow"/>
                                    <input type="text" className="secondRow"/>
                                    <input type="text" className="secondRow"/>
                                    <input type="text" className="secondRow"/>
                                </div>
                                <div className="factor-content__row">
                                    <input type="text" className="firstRow"/>
                                    <input type="text" className="firstRow"/>
                                    <input type="text" className="firstRow"/>
                                    <input type="text" className="firstRow"/>
                                    <input type="text" className="firstRow"/>
                                    <input type="text" className="firstRow"/>
                                    <input type="text" className="firstRow"/>
                                    <input type="text" className="firstRow"/>
                                    <input type="text" className="firstRow"/>
                                </div>
                                <div className="factor-content__row">
                                    <input type="text" className="secondRow"/>
                                    <input type="text" className="secondRow"/>
                                    <input type="text" className="secondRow"/>
                                    <input type="text" className="secondRow"/>
                                    <input type="text" className="secondRow"/>
                                    <input type="text" className="secondRow"/>
                                    <input type="text" className="secondRow"/>
                                    <input type="text" className="secondRow"/>
                                    <input type="text" className="secondRow"/>
                                </div>
                                
                            </div>
                            
                            <div className="factor-footer">
                                <span>توضیحات</span>
                                <input type="text"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}