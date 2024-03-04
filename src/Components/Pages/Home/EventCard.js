function EventCard(props) {
  return (
    <>
      <div className='w3-third w3-margin-right sec5_inner_container mb-4'>
        <div className='w3-card-4 w3-margin-right sec5_card_container sec5_card_container2'>
          <div className='w3-container sec5_img_container2 text-center '>
            <img src={props.imagePath} alt='customer1' />
          </div>
          <div className='w3-container sec5_headers'>
            <h6>{props.title}</h6>
            <h7>{props.location}</h7>
            <br></br>
            <br></br>
            <h7> {props.details}</h7>
            <div className='w3-container w3-margin-bottom '>
              <button className='w3-button w3-circle  w3-right sec5_link_pointer'>
                {'>'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventCard;
