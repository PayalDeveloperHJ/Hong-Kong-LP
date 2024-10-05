import React from 'react'
import getBasePath from '../../utils/getBasePath';

const ROISection = () => {
    const basePath = getBasePath();

    return (
        <div className='container-fluid pb-100 pt-100'>
            <div className='container'>
                <div className='row'>
                    <div className='roi-detail'>
                        <h2>Estimated ROI Comparsion</h2>
                    </div>
                </div>
                <div className='row align-cent'>
                    <div className='col-lg-6 col-sm-6 col-xs-12'>
                        <div className='roi-descri'>
                            <p><span>Dubai: </span>It offers a higher return on investment (ROI), especially in luxury segments. For example, Dubai leads in prime residential price growth, with capital values increasing by 11.2% in the first half of 2023. Additionally, Dubai's tax-friendly environment with no income or capital gains tax significantly boosts profitability for investors​​</p>
                            <p><span>Hong Kong: </span>The  real estate offers rental yields of 2-3% for residential and 4-6% for commercial properties, with strong capital appreciation potential. Despite high property prices and a 15% stamp duty for foreign buyers, the absence of capital gains tax makes it a solid long-term investment option.</p>

                            <h3>Sources</h3>
                            <a href="http://www.globalpropertyguide.com/asia/hong-kong/rental-yields" target='_blank' rel="noreferrer">http://www.globalpropertyguide.com/asia/hong-kong/rental-yields</a>
                        </div>
                    </div>
                    <div className='col-lg-6 col-sm-6 col-xs-12'>
                        <div className='roi-map'>
                            <img src={`${basePath}/img/singapore/ROI-map.jpg`} alt='ROI Rating' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ROISection;