import SubHeader from "@/components/subHeader/SubHeader";

const albums = () => {
  return (
    <>
      <SubHeader title="" />
      <div className="p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="/images/guest-1.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://4.imimg.com/data4/YE/HA/MY-14311280/innova-ac-500x500.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="/images/guest-1.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="/images/car_banner_6.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="/images/guest-1.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://promos.makemytrip.com/appfest/xxhdpi/ChicletBG_OSCabOffer_28Jan_BG.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://5.imimg.com/data5/SELLER/Default/2022/5/EW/AH/EB/103043523/innova-car-rental-in-kashmir.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="/images/guest-1.jpg"
                alt=""
              />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" alt="" />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="/images/guest-1.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://www.royalenfield.com/content/dam/royal-enfield/united-kingdom/motorcycles/himalayan/colours/new-colors/studio-shots/granite-black/side-view.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="/images/guest-1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default albums;
