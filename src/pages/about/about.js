import React from 'react';
import FullWidthImage from '../../components/fullwidthimage/fullwidthimage';
import bluePlanet from '../../assets/images/bluePlanet.jpg';
import { MdEmail } from 'react-icons/md';
import { FaInstagram, FaFacebookSquare, FaBirthdayCake, FaUser } from 'react-icons/fa';
import Button from '../../components/button/button';
//assets
import './styles.css';
import logo from '../../assets/images/logo.png';

class AboutView extends React.Component {

    render() {
        return <div style={{ width: '100%' }}>
            <FullWidthImage opacity="0.5" height="50vh" image={bluePlanet} content={
                <div style={{ marginTop: '120px' }}>
                    <div style={{ background: `url(${logo}) no-repeat center #16121A`, backgroundSize: 'contain' }} className="profilePicture" />
                    <div style={{ margin: '10px 0px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <p style={{ color: '#FFFFFF', fontFamily: 'roboto' }}>
                            Suzano, São Paulo <br />


                        </p>
                        <p style={{ color: '#3DA1E9' }}>
                            <MdEmail style={{ fontSize: '28px' }} />
                            <FaInstagram style={{ fontSize: '28px' }} />
                            <FaFacebookSquare style={{ marginBottom: '2px' }} className="fbIcon" />
                        </p>
                        <p style={{ marginTop: '15px' }}>

                            <a style={{
                                padding: '12px 40px',
                                borderRadius: '50px',
                                textDecoration: 'none',
                                color: "#fefefe",
                                backgroundColor: '#3DA1E9',
                                boxShadow: '0px 0px 6px #1FBDEF'
                            }} href="https://www.facebook.com/PixelCoders-101078254919396" borderRadius="50px" padding="12px 50px" backgroundColor="#3DA1E9" shadow="0px 0px 8px #1FBDEF" >Seguir!</a>


                        </p>
                    </div>

                </div>
            } />
            <div style={{ justifyContent: 'center', alignItems: 'center', margin: ' 20px 5% 0px 5%', display: 'flex', flexDirection: 'column', padding: '10px 20px', borderRadius: '40px 40px 0px 0px', backgroundColor: 'rgba(35,23,102,0.3)' }}>
                <h3 style={{ marginTop: '20px', fontFamily: 'Rubik', color: '#fefefe', fontWeight: 'normal' }}>Informações da conta</h3>
                <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <div style={{ margin: '0px 15px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        < FaBirthdayCake style={{ color: '#FC185E', fontSize: '2rem' }} />
                        <h4 style={{ color: '#fefefe' }}>Nascimento</h4>
                        <h4 style={{ color: '#fefefe', fontWeight: 'lighter' }}>04/02/2020</h4>
                    </div>
                    <div style={{ margin: '0px 15px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        < FaUser style={{ color: '#FC185E', fontSize: '2rem' }} />
                        <h4 style={{ color: '#fefefe' }}>Equipe</h4>
                        <h4 style={{ color: '#fefefe', fontWeight: 'lighter' }}>01</h4>
                    </div>
                </div>
                <h3 style={{ marginTop: '20px', fontFamily: 'Rubik', color: '#fefefe', fontWeight: 'normal' }}>Um pouco sobre o usuário</h3>
                <div style={{ padding: '10px 20px', marginBottom: '20px' }}>
                    <p style={{ color: '#fefefe', textAlign: 'center' }}>
                        Olá, eu sou a Pixel, tenho um enorme
                        comprometimento com a qualidade
                        de meus serviços. Refletir a visão
                        de negócio de meus clientes, numa
                        obra de arte é meu lema.
                        Espero que você se sinta confortável aqui.
                        Ah, e caso você queira ver um pouco mais
                        sobre o que eu faço, veja abaixo. xD
                    </p>
                </div>
                <Button padding="15px 40px" label="Conhecer serviços" backgroundColor="#FC185E" shadow="0px 3px 8px #EF1F1F" />
            </div>
        </div>
    }
}

export default AboutView;