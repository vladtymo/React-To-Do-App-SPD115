import image from '../404.jpg';

function NotFound() {
    return (
        <div>
            <img src={image} alt="Not Found" />
        </div>
    );
}

export default NotFound;
