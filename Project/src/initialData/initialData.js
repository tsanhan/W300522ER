import Picture from "../models/PictureModel.js";

const initialData = () => {

    const data = {
        pictures: [
            {
                url: "https://cdn.pixabay.com/photo/2022/03/12/19/14/sea-7064686_960_720.jpg",
                alt: "sunset",
                credit: "Gorge W Bosh",
                price: 1_000,
            },
            {
                url: "https://cdn.pixabay.com/photo/2021/12/21/08/29/owl-6884773_960_720.jpg",
                alt: "owl",
                credit: "Jessica Rabbit",
                price: 5_000,
            },
            {
                url: "https://cdn.pixabay.com/photo/2022/02/26/07/06/butterfly-7035308_960_720.jpg",
                alt: "butterfly",
                credit: "Tyra Banks",
                price: 500,
            },
        ]
    }
    const pictures = data.pictures.map(pic => new Picture(pic, data.pictures));
    return { pictures };
};

export default initialData;