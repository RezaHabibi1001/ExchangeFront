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
                                <span className="factor-code">ردیف</span>
                                <span className="factor-type">نوعیت</span>
                                <span className="factor-name">نام</span>
                                <span className="factor-company">کمپنی</span>
                                <span className="factor-contery">کشور</span>
                                <span className="factor-count">تعداد</span>
                                <span className="factor-cost">فی</span>
                                <span className="factor-total">جمع</span>
                                <span className="factor-explaination">شرح دارو</span>
                            </div>
                            <div className="factor-content">
                                <div className="factor-content__row">
                                    <input type="text" className="firstRow factor-code" value={1} />
                                    <input type="text" className="firstRow factor-type"/>
                                    <input type="text" className="firstRow factor-name"/>
                                    <input type="text" className="firstRow factor-company"/>
                                    <input type="text" className="firstRow factor-contery"/>
                                    <input type="text" className="firstRow factor-count"/>
                                    <input type="text" className="firstRow factor-cost"/>
                                    <input type="text" className="firstRow factor-total"/>
                                    <input type="text" className="firstRow factor-explaination"/>
                                </div>
                                <div className="factor-content__row">
                                    <input type="text" className="secondRow factor-code" value={2}/>
                                    <input type="text" className="secondRow factor-type"/>
                                    <input type="text" className="secondRow factor-name"/>
                                    <input type="text" className="secondRow factor-company"/>
                                    <input type="text" className="secondRow factor-contery"/>
                                    <input type="text" className="secondRow factor-count"/>
                                    <input type="text" className="secondRow factor-cost"/>
                                    <input type="text" className="secondRow factor-total"/>
                                    <input type="text" className="secondRow factor-explaination"/>
                                </div>
                                <div className="factor-content__row">
                                    <input type="text" className="firstRow factor-code" value={3} />
                                    <input type="text" className="firstRow factor-type"/>
                                    <input type="text" className="firstRow factor-name"/>
                                    <input type="text" className="firstRow factor-company"/>
                                    <input type="text" className="firstRow factor-contery"/>
                                    <input type="text" className="firstRow factor-count"/>
                                    <input type="text" className="firstRow factor-cost"/>
                                    <input type="text" className="firstRow factor-total"/>
                                    <input type="text" className="firstRow factor-explaination"/>
                                </div>
                                <div className="factor-content__row">
                                    <input type="text" className="secondRow factor-code" value={4}/>
                                    <input type="text" className="secondRow factor-type"/>
                                    <input type="text" className="secondRow factor-name"/>
                                    <input type="text" className="secondRow factor-company"/>
                                    <input type="text" className="secondRow factor-contery"/>
                                    <input type="text" className="secondRow factor-count"/>
                                    <input type="text" className="secondRow factor-cost"/>
                                    <input type="text" className="secondRow factor-total"/>
                                    <input type="text" className="secondRow factor-explaination"/>
                                </div>
                                <div className="factor-content__row">
                                    <input type="text" className="firstRow factor-code" value={5} />
                                    <input type="text" className="firstRow factor-type"/>
                                    <input type="text" className="firstRow factor-name"/>
                                    <input type="text" className="firstRow factor-company"/>
                                    <input type="text" className="firstRow factor-contery"/>
                                    <input type="text" className="firstRow factor-count"/>
                                    <input type="text" className="firstRow factor-cost"/>
                                    <input type="text" className="firstRow factor-total"/>
                                    <input type="text" className="firstRow factor-explaination"/>
                                </div>
                                <div className="factor-content__row">
                                    <input type="text" className="secondRow factor-code" value={6}/>
                                    <input type="text" className="secondRow factor-type"/>
                                    <input type="text" className="secondRow factor-name"/>
                                    <input type="text" className="secondRow factor-company"/>
                                    <input type="text" className="secondRow factor-contery"/>
                                    <input type="text" className="secondRow factor-count"/>
                                    <input type="text" className="secondRow factor-cost"/>
                                    <input type="text" className="secondRow factor-total"/>
                                    <input type="text" className="secondRow factor-explaination"/>
                                </div>
                                <div className="factor-content__row">
                                    <input type="text" className="firstRow factor-code" value={7} />
                                    <input type="text" className="firstRow factor-type"/>
                                    <input type="text" className="firstRow factor-name"/>
                                    <input type="text" className="firstRow factor-company"/>
                                    <input type="text" className="firstRow factor-contery"/>
                                    <input type="text" className="firstRow factor-count"/>
                                    <input type="text" className="firstRow factor-cost"/>
                                    <input type="text" className="firstRow factor-total"/>
                                    <input type="text" className="firstRow factor-explaination"/>
                                </div>
                                <div className="factor-content__row">
                                    <input type="text" className="secondRow factor-code" value={8}/>
                                    <input type="text" className="secondRow factor-type"/>
                                    <input type="text" className="secondRow factor-name"/>
                                    <input type="text" className="secondRow factor-company"/>
                                    <input type="text" className="secondRow factor-contery"/>
                                    <input type="text" className="secondRow factor-count"/>
                                    <input type="text" className="secondRow factor-cost"/>
                                    <input type="text" className="secondRow factor-total"/>
                                    <input type="text" className="secondRow factor-explaination"/>
                                </div>
                                <div className="factor-content__row">
                                    <input type="text" className="firstRow factor-code" value={9} />
                                    <input type="text" className="firstRow factor-type"/>
                                    <input type="text" className="firstRow factor-name"/>
                                    <input type="text" className="firstRow factor-company"/>
                                    <input type="text" className="firstRow factor-contery"/>
                                    <input type="text" className="firstRow factor-count"/>
                                    <input type="text" className="firstRow factor-cost"/>
                                    <input type="text" className="firstRow factor-total"/>
                                    <input type="text" className="firstRow factor-explaination"/>
                                </div>
                                <div className="factor-content__row">
                                    <input type="text" className="secondRow factor-code" value={10}/>
                                    <input type="text" className="secondRow factor-type"/>
                                    <input type="text" className="secondRow factor-name"/>
                                    <input type="text" className="secondRow factor-company"/>
                                    <input type="text" className="secondRow factor-contery"/>
                                    <input type="text" className="secondRow factor-count"/>
                                    <input type="text" className="secondRow factor-cost"/>
                                    <input type="text" className="secondRow factor-total"/>
                                    <input type="text" className="secondRow factor-explaination"/>
                                </div>
                                <div className="factor-content__row">
                                    <input type="text" className="firstRow factor-code" value={11} />
                                    <input type="text" className="firstRow factor-type"/>
                                    <input type="text" className="firstRow factor-name"/>
                                    <input type="text" className="firstRow factor-company"/>
                                    <input type="text" className="firstRow factor-contery"/>
                                    <input type="text" className="firstRow factor-count"/>
                                    <input type="text" className="firstRow factor-cost"/>
                                    <input type="text" className="firstRow factor-total"/>
                                    <input type="text" className="firstRow factor-explaination"/>
                                </div>
                                <div className="factor-content__row">
                                    <input type="text" className="secondRow factor-code" value={12}/>
                                    <input type="text" className="secondRow factor-type"/>
                                    <input type="text" className="secondRow factor-name"/>
                                    <input type="text" className="secondRow factor-company"/>
                                    <input type="text" className="secondRow factor-contery"/>
                                    <input type="text" className="secondRow factor-count"/>
                                    <input type="text" className="secondRow factor-cost"/>
                                    <input type="text" className="secondRow factor-total"/>
                                    <input type="text" className="secondRow factor-explaination"/>
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