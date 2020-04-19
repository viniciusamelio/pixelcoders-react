import React from 'react';
import FullWidthImage from '../../components/fullwidthimage/fullwidthimage';
import Title from '../../components/title/title';
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import Footer from '../../components/footer/footer';
import Loader from 'react-loader-spinner'
import Textarea from '../../components/textarea/textarea';
//assets
import meteor from '../../assets/images/meteor.svg'
import { FaSmile } from "react-icons/fa";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

class OrderView extends React.Component {

    state = {
        activePage: 1,
        name: "",
        description: "",
        contact: "",
        loading: false
    }

    sendEmail = async () => {
        this.setLoading();
        let description = this.state.description;
        let contact = this.state.contact;
        let name = this.state.name;
        window.emailjs.send(
            'default_service',
            'order',
            {
                description,
                name,
                contact
            },
            'user_MXhtN45HRamUsfXTdpkEE'
        ).then(res => {
            this.setLoading();
            this.nextPage();
        })

    }

    nextPage = () => {
        this.setState((e) => {
            return { activePage: e.activePage + 1 }
        });
    }

    setLoading = () => {
        this.setState((e) => {
            return { loading: !e.loading }
        });
    }

    setName = (name) => {
        this.setState({
            name: name.target.value
        });
    }

    setDescription = (description) => {
        this.setState({
            description: description.target.value
        });
    }

    setContact = (contact) => {
        this.setState({
            contact: contact.target.value
        });
    }

    validateName = () => {
        if (this.state.name.length < 3) {
            return alert('Digite um nome válido');
        }
        return this.nextPage();
    }

    validateDescription = () => {
        if (this.state.description.length < 4) {
            return alert('Digite uma descrição válida');
        }
        return this.nextPage();
    }

    validateContact = () => {
        if (this.state.contact.length < 4) {
            return alert('Digite um contato válido');
        }
        this.sendEmail();
    }



    render() {
        let currentPage = this.state.activePage;
        let action = this.state.loading;
        let actionButton;
        if (!action) {
            actionButton = <Button click={this.validateContact} label="Prosseguir" padding="15px 80px" backgroundColor="#FC185E" shadow="0px 2px 8px #EF1F1F" />
        } else {
            actionButton = <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Loader
                    type="Puff"
                    color="#FC185E"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs

                />
            </div>
        }
        switch (currentPage) {
            case 1:
                currentPage = <div style={{ padding: '30px' }}>
                    <Title size="1.5rem" text="Agradecemos o interesse em nossos serviços!
                Precisamos fazer algumas perguntas, que serão
                enviadas para equipe, para conseguir ter uma visão
                inicial da obra." />
                    <div style={{ height: '40px' }} />
                    <Button click={this.nextPage} label="Iniciar" padding="15px 80px" backgroundColor="#FC185E" shadow="0px 2px 8px #EF1F1F" />
                </div>
                break;
            case 2:
                currentPage = <div style={{ padding: '30px' }}>
                    <Title size="1.5rem" text="Primeiramente, qual o nome da empresa? (seu nome, caso seja um projeto pessoal)" />
                    <div style={{ height: '40px' }} />
                    <Input placeholder="Exemplo: PixelCoders" width="60vw" value={this.state.name} valueHandler={this.setName} />
                    <Button click={this.validateName} label="Prosseguir" padding="15px 80px" backgroundColor="#FC185E" shadow="0px 2px 8px #EF1F1F" />
                </div>
                break;
            case 3:
                currentPage = <div style={{ padding: '30px' }}>
                    <Title size="1.5rem" text="E em relação a obra, do que você precisa? Descreva." />
                    <div style={{ height: '40px' }} />
                    <Textarea placeholder="Exemplo: Site comercial com cátalogo de produtos" width="60vw" value={this.state.description} valueHandler={this.setDescription} />
                    <Button click={this.validateDescription} label="Prosseguir" padding="15px 80px" backgroundColor="#FC185E" shadow="0px 2px 8px #EF1F1F" />
                </div>
                break;
            case 4:
                currentPage = <div style={{ padding: '30px' }}>
                    <Title size="1.5rem" text="Por fim, nos deixe um contato! Ele pode ser um celular(com ddd) ou e-mail." />
                    <div style={{ height: '40px' }} />
                    <Input placeholder="Exemplo: 11 951213836" width="60vw" value={this.state.contact} valueHandler={this.setContact} />
                    {actionButton}
                </div>
                break;
            default:
                currentPage = <div style={{ padding: '30px' }}>
                    <div style={{ color: '#FC185E', fontSize: '4.5rem', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                        <FaSmile />
                    </div>
                    <div style={{ height: '40px' }} />
                    <Title size="1.5rem" text="Agradecemos seu interesse! Logo entraremos em contato através do que nos foi enviado. Esperamos que, desde já, sua experiência esteja sendo satisfatória!" />
                    <div style={{ height: '40px' }} />
                    <Button href="/" label="Voltar para home" padding="15px 80px" backgroundColor="#FC185E" shadow="0px 2px 8px #EF1F1F" />
                </div>
                break;

        }
        return <div style={{ width: '100%' }}>
            <FullWidthImage opacity="0.3" image={meteor} content={
                currentPage
            }
            />
            <Footer />
        </div>

    }

}

export default OrderView;