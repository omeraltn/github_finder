export class Github {
  constructor() {
    this.client_id = "99b652d3e5a07356f4d9";
    this.client_secret = "1699bf2d619903a9ebd2ddbc6bdca95713a7cbc4";
    this.per_page = 10;
  }
    //* api den kullanıcı bilgileri alma
   async fetchUserData(username) {
    //parametre olarak gelen kullanıcı adına göre istek attık
    const profileRes = await fetch(
      `https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    //kullanıcı repolarını almak için istek attık
    const repoRes = await fetch(
      `https://api.github.com/users/${username}/repos?cliend_id=${this.client_id}&client_secret=${this.client_secret}&per_page=${this.per_page}&sort=${this.sort}`
     );
     
    // apiden aldığımız cevabı json yapısına cevirdik
    const data = await profileRes.json();
    const repos = await repoRes.json();
    //fonksiyonun çağrıldıği yere bilgileri gönderme
    return {data, repos};
  }
}
