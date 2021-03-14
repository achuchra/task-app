interface IUser {
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

interface IGetUsersResponse {
  results: Array<IUser>;
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}
