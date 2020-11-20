
import raphunt_img from '../images/raphunt_pf.PNG'
import connect4_img from '../images/connect4_pf.PNG'
import cancer_img from '../images/cancer_classifier_pf.PNG'
import reverse_img from '../images/reverse_img_search_pf.png'
import panorama_img from '../images/panorama_pf.png'
import resizer_img from '../images/image_resizer_pf.png'

const portfolio_items = [
    {
        name: 'RAPHUNT',
        description: 'Gathers new hip hop song releases and displays their streaming links',
        img_src: raphunt_img,
        link:'https://rdey0.github.io/raphunt/',
        filter_tags: ['ALL', 'WEB APPS', 'BACK END']
    },
    {
        name: 'CONNECT 4 AI',
        description: 'Play connect 4 against difficult game search algorithms',
        img_src: connect4_img,
        link: 'https://rdey0.github.io/connect4_ai/',
        filter_tags: ['ALL', 'WEB APPS', 'ALGORITHMIC']
    },
    {
        name: 'CANCER CLASSIFIER',
        description: 'Customize your own machine learning model to predict the presence of cancer',
        img_src: cancer_img,
        link: 'https://rdey0.github.io/cancer_classifier/',
        filter_tags: ['ALL', 'WEB APPS', 'ALGORITHMIC', 'BACK END']
    },
    {
        name: 'REVERSE IMAGE SEARCH',
        description: 'Finds the closest matching images in an image bank when given a query image',
        img_src: reverse_img,
        link: 'https://github.com/rdey0/reverse_image_search',
        filter_tags: ['ALL', 'ALGORITHMIC']
    },
    {
        name: 'PANORAMIC STITCHER',
        description: 'Creates a panoramic, angle corrected photo using a set of overlapping images',
        img_src: panorama_img,
        link: 'https://github.com/rdey0/panoramic_stitcher',
        filter_tags: ['ALL', 'ALGORITHMIC']
    },
    {
        name: 'IMAGE RESIZER',
        description: 'A seam carving algorithm which resizes images without loss of key features',
        img_src: resizer_img,
        link: 'https://github.com/rdey0/image_resizer',
        filter_tags: ['ALL', 'ALGORITHMIC']
    }

];

export default portfolio_items;