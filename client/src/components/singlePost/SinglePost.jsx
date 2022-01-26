import "./singlePost.css"

export default function SinglePost() {
  return (
  <div className="singlePost">
      <div className="singlePostWrapper">
          <img 
            src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
            alt=""
            className="singlePostImg"
        />
        <h1 className="singlePostTitle">
            Lorem ipsum dolor sit amet.
            <div className="singlePostEdit">
                <i className="singlePostIcon far fa-edit"></i>
                <i className="singlePostIcon  far fa-trash-alt"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>Dimon</b></span>
            <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque magna ipsum, finibus quis arcu non, varius porttitor augue. Quisque fermentum, dolor ac imperdiet viverra, lorem eros tempus ligula, sed eleifend dui turpis ac odio. Morbi dignissim gravida tempor. Sed lacinia justo libero, ut posuere dolor dictum et. Donec ut nisi ornare, rutrum lectus ac, gravida purus. Sed diam massa, venenatis vitae laoreet quis, bibendum auctor enim. Pellentesque sollicitudin ipsum laoreet sapien tempus consectetur. Mauris malesuada sed mauris ac finibus. Donec vitae lacus ultrices, varius tellus vitae, rutrum lorem. Phasellus posuere, lectus a condimentum euismod, lectus purus suscipit arcu, vel pharetra turpis lectus sit amet ligula. Morbi quis auctor lectus. Sed ut congue metus. Donec vel magna vitae libero efficitur rhoncus. Donec scelerisque scelerisque dolor. Phasellus semper enim nulla, non malesuada quam placerat quis. Morbi non ex id elit convallis sollicitudin nec at nisl.
        Phasellus posuere, lectus a condimentum euismod, lectus purus suscipit arcu, vel pharetra turpis lectus sit amet ligula. Morbi quis auctor lectus. Sed ut congue metus. Donec vel magna vitae libero efficitur rhoncus. Donec scelerisque scelerisque dolor. Phasellus semper enim nulla, non malesuada quam placerat quis. Morbi non ex id elit convallis sollicitudin nec at nisl.
        </p>
      </div>
  </div>
  )
}
