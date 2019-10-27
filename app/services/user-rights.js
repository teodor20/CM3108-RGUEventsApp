import Service from '@ember/service';

export default Service.extend({
  isAdmin: false,
  user: null,

  saveRights(canEdit) {
    if (canEdit) {
      this.isAdmin = true;
    }
    else {
      this.isAdmin = false;
    }
  },
  saveUser(user) {
    this.user = user;
  },
  getRights() {
    return this.isAdmin
  },
  getUser() {
    return this.user
  },
  resetRights() {
    this.isAdmin = false;
    this.user = null;
  }
});
