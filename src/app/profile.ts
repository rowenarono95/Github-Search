export class Profile {
    constructor(
        public login: string,
        public avatar_url: string,
        public repos: string,
        public followers: number,
        public following: number,
        public email: string,
    ) { }
}
