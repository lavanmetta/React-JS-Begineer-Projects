import React, { Component } from 'react'
import { imagesGallery } from './data';
import './index.css'


class GalleryApp extends Component {
    state = { 
        images: [],
        pic: ''
    } 

    componentDidMount() {
        const images = imagesGallery();

        this.setState({
            images: images,
            pic: images[0].imgUrl
        });

        
    }

    changePic = (imgUrl) => {
        this.setState({pic: imgUrl})
    }

    render() { 
        return (
            <div className='main-container'>
                <div className='container'>
                    <img src={this.state.pic} alt="img" />
                
                    <div className='img-btn-container'>
                    {
                        this.state.images.map((each) => 
                        <img 
                            onClick={() => this.changePic(each.imgUrl)} 
                            src={each.imgUrl} 
                            key={each.id} 
                            alt="img"
                            className= {`img ${this.state.pic === each.imgUrl ? 'active' : 'inactive'}`}
                        />
                    )
                }
                </div>
                </div>
            </div>
        );
    }
}

export default GalleryApp;