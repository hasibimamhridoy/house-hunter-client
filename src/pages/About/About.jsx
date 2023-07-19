const About = () => {
  return (
    <div>
      <div className="flex justify-center lg:mb-10 mb-6"></div>

      <section className=" text-gray-400">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light sm:text-lg">
            <h2 className="mb-4 text-2xl tracking-tight">
              Welcome to HouseHunter - Your Trusted House Renter
            </h2>
            <p className="mb-4">
              At HouseHunter, we are dedicated to simplifying the process of
              finding your perfect rental home. With our extensive database of
              rental properties and user-friendly platform, we make it easy for
              tenants and landlords to connect. Finding a rental home can be
              overwhelming, but HouseHunter is here to make it effortless. Our
              platform provides a comprehensive selection of houses, apartments,
              and condos available for rent in various locations. Whether you're
              looking for a cozy apartment in the city or a spacious house in
              the suburbs, we have options to suit every lifestyle and budget.
              We understand that each renter has unique preferences and
              requirements. That's why our advanced search features allow you to
              customize your search based on factors such as the number of
              bedrooms, bathrooms, desired amenities, and rental price range.
              With detailed property listings, including high-quality images and
              comprehensive descriptions, you can make informed decisions before
              scheduling property viewings.
            </p>
            <p>
              Our commitment to customer satisfaction sets us apart. We
              prioritize accuracy and reliability by regularly updating our
              listings and verifying property details. Our dedicated customer
              support team is available to assist you throughout your renting
              journey, answering any questions you may have and providing
              guidance along the way. Join HouseHunter today and gain access to
              an extensive network of landlords and rental properties. Say
              goodbye to endless searching and let us help you find your dream
              home. Start your house-hunting adventure with HouseHunter, and
              discover the perfect rental property that meets your needs and
              exceeds your expectations.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="https://images.unsplash.com/photo-1632054632263-a5d21f13b600?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://images.unsplash.com/photo-1589186222872-418c38954ca3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
