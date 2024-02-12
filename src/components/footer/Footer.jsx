import React from 'react'
import './footer.css'

const Footer = () => {

  function goInsta() {
    window.open("https://www.instagram.com/uzum.market")
  }
  function goTeleg() {
    window.open("https://t.me/uzum_market")
  }
  function goYoo() {
    window.open("https://www.youtube.com/channel/UCY3nNF2MUDKHrELA6LzbnHA")
  }
  function goFace() {
    window.open("https://www.facebook.com/uzummarket")
  }
  function goStore(params) {
    window.open("https://apps.apple.com/ru/app/uzum-market-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82-%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD/id1640483056")
  }
  function goGoogle(params) {
    window.open("https://play.google.com/store/apps/details?id=uz.uzum.app&pli=1")
  }
  return (
    <>
      <div className="div9">
        <div>
          <h1 className="p1">Biz haqimizda</h1>
          <p>
            <p className="p2">Topshirish punktlari</p>
          </p>
          <p>
            <p className="p3">Vacansiyalar</p>
          </p>
        </div>

        <div className="div2">
          <h1 className="p1">Foydalanuvchilarga</h1>
          <p>
            <p className="p2">Biz bilan bo'glanish</p>
          </p>
          <p>
            <p className="p3">Savol-Javob</p>
          </p>
        </div>

        <div className="div3">
          <h1 className="p1">Tadbirkorlarga</h1>
          <p>
            <p className="p2">Uzumda soting</p>
          </p>
          <p>
            <p className="p3">Sotuvchi kabinetiga kirish</p>
          </p>
        </div>

        <div className="div12">
          <p className="p4">Ilovani yuklab olish</p>
          <img className="img" onClick={goStore} src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/800px-Download_on_the_App_Store_Badge.svg.png" alt="..." />
          <img className="img1" onClick={goGoogle} src="https://creatorscloud.sony.net/catalog/assets/image/apps-img/other/icon/google-btn.png" alt="..." />
        </div>
        <div>
          <p className="p5">Uzum ijtimoiy tarmoqlarda</p>
          <img className="img4" onClick={goInsta} src="https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_640.jpg" alt="..." />
          <img className="img5" onClick={goTeleg} src="https://cdn.pixabay.com/photo/2021/12/27/10/50/telegram-6896827_640.png" alt="..." />
          <img className="img6" onClick={goYoo} src="https://static.vecteezy.com/system/resources/previews/002/534/753/non_2x/red-play-button-in-the-rounded-rectangle-icon-sign-isolated-on-white-background-illustration-vector.jpg" alt="..." />
          <img className="img7" onClick={goFace} src="https://st2.depositphotos.com/1102480/7545/i/450/depositphotos_75454839-stock-photo-facebook-logo-sign-printed-on.jpg" alt="..." />
        </div>
        <div>
          <p>
            <p className="a1" >Maxviylik kelishuvi</p>
          </p>
          <p className="a2" >Foydalanuvchi kelishuvi</p>
          <p className="p40">«2024© XK MCHJ «UZUM MARKET». STIR 309376127.</p>
          <p className='p30'>Barcha huquqlar himoyalangan» </p>
          <p className='p59'>__________________________________________________________________________________________________________________________________________________________________________________________________________</p>
        </div>
      </div>
    </>
  )
}
export default Footer