import React from 'react';
import PropTypes from 'prop-types';
import { ModalComp, ParagraphComp, TagComp } from '../../../components/components';

class ChallengeDetaisContainer extends React.Component{

    render(){

        const { word, image, sound, video } = this.props.data;

        return(
            <div>
                <ModalComp className="modal challengeDetails" visible={this.props.visible} footer={null}  onCancel={this.props.handleCancel}>
                    <ParagraphComp><h3>Desafio: {word}</h3></ParagraphComp>
                    <div className="info image">
                        <img alt={ word } src={ image } width="400px"/>
                    </div>
                    <div className="info video">
                        {  
                            video !== "" & video !== undefined?
                                video.indexOf('yout') !== -1?
                                    <iframe width="430" src={ video } title={ word } frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                :
                                <video width="400" controls>
                                    <source src={ video } type="video/mp4" />
                                    <source src={ video } type="video/ogg" />
                                    Seu navegador não suporta video em HTML 5
                                </video>
                            :
                            <TagComp color="#f50">Sem Vídeo</TagComp>
                        }
                    </div>
                    <div className="info audio">
                        {
                            sound !== "" & sound !== undefined?
                            <audio controls>
                                <source src={sound} type="audio/ogg" />
                                <source src={sound} type="audio/mpeg" />
                                Seu navegador não suporta áudio em HTML 5
                            </audio>
                            :
                            <TagComp color="#f50">Sem áudio</TagComp>
                        }
                    </div>
                </ModalComp>
            </div>
        );
    }
}

ChallengeDetaisContainer.propTypes = {
    data: PropTypes.object.isRequired,
    visible: PropTypes.bool, 
    handleCancel:PropTypes.func.isRequired
}

export default ChallengeDetaisContainer;
