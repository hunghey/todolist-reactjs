import React from 'react';
import logo from '../img/11.jpg';

const Information = () => {
    return (
        <div className="card" data-state="#about">
            <div className="card-header">
                <img src={logo} className="card-avatar"></img>
                <h1 class="card-fullname">Nguyễn Lê Phú Hưng</h1>
                <h2 class="card-jobtitle">Intern</h2>
            </div>
            <div className="card-main">
            <div class="card-section is-active" id="about">
                <div className="card-content">

                    <div className="card-subtitle ">
                        THÔNG TIN CÁ NHÂN
                    </div>
                    <div class="card-contact-wrapper">
                        <form className='card-form' action="#">

                            <div className="info-data">
                                <div className='info-input'>Họ và tên: </div>
                                <div>Nguyễn Lê Phú Hưng</div>
                            </div>
                            <div className='info-data'>
                                <div className='info-input'>Giới tính: </div>
                                <div className='data'>Nữ</div>
                            </div>

                            <div className="info-data">
                                <div className='info-input'>Ngày sinh: </div>
                                <div className='data'>15/12/2002</div>
                            </div>
                            <div className="info-data">
                                <div className='info-input'>Quê quán: </div>
                                <div className='data'>Long An</div>
                            </div>
                            <div className="info-data">
                                <div className='info-input'>SĐT: </div>
                                <div className='data'>0938834107</div>
                            </div>
                            <div className="info-data">
                                <div className='info-input'>Email: </div>
                                <div className='data'>nguyenlephuhung15@gmail.com</div>
                            </div>
                            <div className="info-data">
                                <div className='info-input'>Lớp: </div>
                                <div className='data'>46.01.CNTTD</div>
                            </div>
                            <div className="info-data">
                                <div className='info-input'>MSSV: </div>
                                <div className='data'>46.01.104.060</div>
                            </div>
                        </form >
                    </div>
                </div>
                </div>

            </div>
        </div>
    );
};

export default Information;