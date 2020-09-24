// Optional Chaining
let vanNgoc = {
  profile: {
    company : 'enkio VN',
    website : 'ekino.com',
    department : 'FEA',
    position : 'Intern',
    age : 23
  }
}

const getWebsite1 = vanNgoc && vanNgoc.profile && vanNgoc.profile.website;
console.log(getWebsite1);

// with Optional Channing
// const getWebsite2 = vanNgoc?.profile?.website;
// console.log(getWebsite2)
