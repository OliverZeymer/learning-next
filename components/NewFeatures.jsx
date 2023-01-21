"use client";
import styles from "../styles";
const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <div className={`${styles.flexCenter} rounded-3xl w-16 h-16 bg-[#323f5d]`}>
      <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
    </div>
    <h2 className="mt-6 font-bold text-3xl leading-7 text-white">{title}</h2>
    <p className="flex-1 mt-4 font-normal text-lg text-secondary-white leading-8">{subtitle}</p>
  </div>
);
export default NewFeatures;
