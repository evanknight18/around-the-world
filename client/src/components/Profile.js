import React from 'react';

const Profile = ({ user }) => {
    return (
        <div>
            <h2>{user.username}'s Profile</h2>
            <p>Email: {user.email}</p>

            <h3>Visited Locations:</h3>
            {user.locations.map((location, index) => (
                <div key={index}>
                    <p>Location: {location.name}</p>
                    <p>Latitude: {location.latitude}</p>
                    <p>Longitude: {location.longitude}</p>
                </div>
            ))}
        </div>
    );
};

export default Profile;
