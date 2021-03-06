import Component from 'vue-class-component';
import { Inject, Vue } from 'vue-property-decorator';
import LoginService from '@/account/login.service';
import { HelloWorldComponent } from "@conacyt/hello-world";

@Component({
  components: {"form-conacyt": HelloWorldComponent }
})

export default class Home extends Vue {
  @Inject('loginService')
  private loginService: () => LoginService;

  public openLogin(): void {
    this.loginService().openLogin((<any>this).$root);
  }

  public get authenticated(): boolean {
    return this.$store.getters.authenticated;
  }

  public get username(): string {
    return this.$store.getters.account ? this.$store.getters.account.login : '';
  }
  install(Vue: any, options: any) {
       Vue.component('form-conacyt', HelloWorldComponent);
       }
    
}