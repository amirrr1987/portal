<template>
  <v-navigation-drawer
    fixed
    class="elevation-3 scroll-y pb-16 vira-hide-scrollbar"
    width="300"
    enable-resize-watcher
    app
    right
    clipped
    v-model="$parent.$parent.drawer"
  >
    <v-list shaped height="100%" class="sticky">
      <v-list-item link to="/acceptor/dashboard" active-class="menu-active">
        <v-list-item-icon>
          <IconDashboard width="20" height="20" />
        </v-list-item-icon>
        <v-list-item-title>داشبورد</v-list-item-title>
      </v-list-item>

      <v-list-group no-action active-class="menu-active">
        <template v-slot:activator>
          <v-list-item-icon>
            <IconInvoiceIssue width="20" height="20" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>صدور فاکتور</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item link to="/acceptor/invoice-issue/create">
          <v-list-item-content>
            <v-list-item-title>صدور فاکتور جدید</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/acceptor/invoice-issue/list">
          <v-list-item-content>
            <v-list-item-title>لیست درخواست کنندگان</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>


      <v-list-item link to="/acceptor/invoice-list" active-class="menu-active">
        <v-list-item-icon>
          <IconInvoiceList width="20" height="20" />
        </v-list-item-icon>
        <v-list-item-title>لیست فاکتور</v-list-item-title>
      </v-list-item>


      <v-list-group no-action active-class="menu-active">
        <template v-slot:activator>
          <v-list-item-icon>
            <IconSale width="20" height="20" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>گزارش فروش</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item link to="/acceptor/sale-report/chart">
          <v-list-item-content>
            <v-list-item-title>نمودار فروش</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/acceptor/sale-report/list">
          <v-list-item-content>
            <v-list-item-title>لیست تراکنش ها</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>



      <v-list-group no-action active-class="menu-active">
        <template v-slot:activator>
          <v-list-item-icon>
            <IconSettlement width="20" height="20" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>تسویه حساب</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item link to="/acceptor/settlement/create">
          <v-list-item-content>
            <v-list-item-title>ثبت درخواست جدید</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/acceptor/settlement/list">
          <v-list-item-content>
            <v-list-item-title>لیست درخواست ها</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/acceptor/settlement/type">
          <v-list-item-content>
            <v-list-item-title>نوع تسویه حساب</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>

      <v-list-group no-action active-class="menu-active">
        <template v-slot:activator>
          <v-list-item-icon>
            <IconBag width="20" height="20" fill="#686868"/>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>کیف پول</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item link to="/acceptor/wallet/create">
          <v-list-item-content>
            <v-list-item-title> درخواست کیف پول جدید</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/acceptor/wallet/list">
          <v-list-item-content>
            <v-list-item-title>لیست کیف پول ها</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>

      <v-list-group no-action active-class="menu-active">
        <template v-slot:activator>
          <v-list-item-icon>
            <IconAccount width="20" height="20" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>حساب های من</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item link to="/acceptor/account/create">
          <v-list-item-content>
            <v-list-item-title>ثبت حساب جدید</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/acceptor/account/list">
          <v-list-item-content>
            <v-list-item-title>لیست حساب ها</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>


    <v-list-group no-action active-class="menu-active">
        <template v-slot:activator>
          <v-list-item-icon>
            <IconDiscount width="20" height="20" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>تخفیفات</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item link to="/acceptor/discount/create">
          <v-list-item-content>
            <v-list-item-title>تعریف تخفیف</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/acceptor/discount/list">
          <v-list-item-content>
            <v-list-item-title>لیست تخفیفات</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/acceptor/discount/category">
          <v-list-item-content>
            <v-list-item-title>دسته بندی تخفیفات</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>


      <v-list-item link to="/acceptor/comment/list" active-class="menu-active">
        <v-list-item-icon>
          <IconComment width="20" height="20" />
        </v-list-item-icon>
        <v-list-item-title>کامنت ها</v-list-item-title>
      </v-list-item>


      <v-list-item link to="/acceptor/violation/list" active-class="menu-active">
        <v-list-item-icon>
          <IconViolations width="20" height="20" />
        </v-list-item-icon>
        <v-list-item-title>تخلفات</v-list-item-title>
      </v-list-item>

      <v-list-group no-action active-class="menu-active">
        <template v-slot:activator>
          <v-list-item-icon>
            <IconTicket width="20" height="20" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>تیکت ها</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item link to="/acceptor/ticket/create">
          <v-list-item-content>
            <v-list-item-title>ثبت تیکت</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/acceptor/ticket/me">
          <v-list-item-content>
            <v-list-item-title>تیکت های من</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
      <v-list-group no-action active-class="menu-active">
        <template v-slot:activator>
          <v-list-item-icon>
            <IconBenCard width="20" height="20" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>بن کارت</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item link to="/acceptor/voucher/create">
          <v-list-item-content>
            <v-list-item-title>ساخت بن کارت</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/acceptor/voucher/list">
          <v-list-item-content>
            <v-list-item-title>لیست بن کارت</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>


      <v-list-group no-action active-class="menu-active">
        <template v-slot:activator>
          <v-list-item-icon>
            <IconVirtualCreditCard width="20" height="20" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>کارت اعتباری مجازی</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item link to="/acceptor/virtual-credit-card/create">
          <v-list-item-content>
            <v-list-item-title>ساخت کارت اعتباری مجازی</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/acceptor/virtual-credit-card/list">
          <v-list-item-content>
            <v-list-item-title>لیست کارت اعتباری مجازی</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
      

    </v-list>
  </v-navigation-drawer>
</template>
<script>
import IconDashboard from "@/icons/Menu/IconDashboard";
import IconSale from "@/icons/Menu/IconSales";
import IconDiscount from "@/icons/Menu/IconDiscount";
import IconViolations from "@/icons/Menu/IconViolations";
import IconTicket from "@/icons/Menu/IconTicket";
import IconBenCard from "@/icons/Menu/IconBenCard";
import IconSettlement from "@/icons/Menu/IconSettlement";
import IconVirtualCreditCard from "@/icons/Menu/IconVirtualCreditCard";
import IconInvoiceIssue from "@/icons/Menu/IconInvoiceIssue";
import IconInvoiceList from "@/icons/Menu/IconInvoiceList";
import IconAccount from "@/icons/Menu/IconAccount";
import IconComment from "@/icons/Menu/IconComment";
import IconBag from "@/icons/Main/IconBag";

export default {
  name: "Menu",
  components: {
    IconDashboard,
    IconInvoiceIssue,
    IconInvoiceList,
    IconSale,
    IconDiscount,
    IconViolations,
    IconTicket,
    IconBenCard,
    IconSettlement,
    IconVirtualCreditCard,
    IconAccount,
    IconComment,
    IconBag,
  },
};
</script>
<style lang="scss">
.v-navigation-drawer {
  max-height: 100% !important;
}
.sticky {
  // position: sticky !important;
}
.v-list-item__title {
  color: #686868;
}

.menu-active {
  svg {
    rect {
      fill: #4fc7db !important;
    }
    path {
      fill: #4fc7db !important;
    }
    ellipse {
      fill: #4fc7db !important;
    }
  }
}
.v-list-group__items {
  .v-list-item--active {
    .v-list-item__content {
      .v-list-item__title {
        color: #4fc7db !important;
      }
    }
  }
}

.v-navigation-drawer__content::-webkit-scrollbar {
  display: none !important;
}

.v-navigation-drawer__content {
  -ms-overflow-style: none !important;
  scrollbar-width: none !important;
}
</style>