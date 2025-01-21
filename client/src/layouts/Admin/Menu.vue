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
      <v-list-item link to="/admin/dashboard" active-class="menu-active">
        <v-list-item-icon>
          <IconDashboard width="20" height="20" />
        </v-list-item-icon>
        <v-list-item-title>داشبورد</v-list-item-title>
      </v-list-item>

      <v-list-group no-action active-class="menu-active">
        <template v-slot:activator>
          <v-list-item-icon>
            <IconAcceptor width="20" height="20" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>پذیرنده</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item link to="/admin/acceptor/create">
          <v-list-item-content>
            <v-list-item-title>ثبت پذیرنده</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          link
          to="/admin/acceptor/list"
          active-class="menu-item-active"
        >
          <v-list-item-content>
            <v-list-item-title>لیست پذیرنده</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/admin/acceptor/discount-create">
          <v-list-item-content>
            <v-list-item-title>ثبت تخفیفات پذیرنده ها</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/admin/acceptor/discount-list">
          <v-list-item-content>
            <v-list-item-title>لیست تخفیفات پذیرنده ها</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>

      <v-list-group no-action active-class="menu-active">
        <template v-slot:activator>
          <v-list-item-icon>
            <IconAgent width="20" height="20" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>نماینده</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item link to="/admin/agent/create">
          <v-list-item-content>
            <v-list-item-title>ثبت نماینده</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/admin/agent/list">
          <v-list-item-content>
            <v-list-item-title>لیست نماینده</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>

      <v-list-group no-action active-class="menu-active">
        <template v-slot:activator>
          <v-list-item-icon>
            <IconCategory width="20" height="20" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>اصناف</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item link to="/admin/category/create">
          <v-list-item-content>
            <v-list-item-title>تعریف صنف</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/admin/category/list">
          <v-list-item-content>
            <v-list-item-title>لیست اصناف</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>

      <v-list-group no-action active-class="menu-active">
        <template v-slot:activator>
          <v-list-item-icon>
            <IconSale width="20" height="20" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>گزارش فروش</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item link to="/admin/sale-report/chart">
          <v-list-item-content>
            <v-list-item-title>نمودار فروش</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/admin/sale-report/list">
          <v-list-item-content>
            <v-list-item-title>لیست تراکنش ها</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>

      <v-list-item link to="/admin/violation/list" active-class="menu-active">
        <v-list-item-icon>
          <IconViolations width="20" height="20" />
        </v-list-item-icon>
        <v-list-item-title>تخلفات</v-list-item-title>
      </v-list-item>

      <v-list-group no-action active-class="menu-active">
        <template v-slot:activator>
          <v-list-item-icon>
            <IconRequests width="20" height="20" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>درخواست ها</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item link to="/admin/request/acceptor/list">
          <v-list-item-content>
            <v-list-item-title>پذیرنده های جدید</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/admin/request/discount/list">
          <v-list-item-content>
            <v-list-item-title>تخفیفات</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/admin/request/comment/list">
          <v-list-item-content>
            <v-list-item-title>کامنت ها</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/admin/request/account/list">
          <v-list-item-content>
            <v-list-item-title>حساب ها</v-list-item-title>
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

        <v-list-item link to="/admin/discount/create">
          <v-list-item-content>
            <v-list-item-title>تعریف تخفیف</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/admin/discount/list">
          <v-list-item-content>
            <v-list-item-title>لیست تخفیفات</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/admin/discount/category">
          <v-list-item-content>
            <v-list-item-title>دسته بندی تخفیفات</v-list-item-title>
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

        <v-list-item link to="/admin/voucher/create">
          <v-list-item-content>
            <v-list-item-title>ساخت بن کارت</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/admin/voucher/list">
          <v-list-item-content>
            <v-list-item-title>لیست بن کارت</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>

      <v-list-item link to="/admin/activity-monitor/list" active-class="menu-active">
        <v-list-item-icon>
          <IconEye width="30" height="30" fill="#686868"/>
        </v-list-item-icon>
        <v-list-item-title>رصد فعالیت ها</v-list-item-title>
      </v-list-item>

      <v-list-item
        link
        to="/admin/profile/edit"
        active-class="menu-active"
      >
        <v-list-item-icon>
          <IconProfileEdit width="20" height="20" />
        </v-list-item-icon>
        <v-list-item-title>ویرایش اطلاعات</v-list-item-title>
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

        <v-list-item link to="/admin/ticket/create">
          <v-list-item-content>
            <v-list-item-title>ثبت تیکت</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/admin/ticket/list">
          <v-list-item-content>
            <v-list-item-title>لیست تیکت ها</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>

      <v-list-group no-action active-class="menu-active">
        <template v-slot:activator>
          <v-list-item-icon>
            <IconDefultMessage   width="20" height="20" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>لیست پیام های پیش فرض</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item link to="/admin/default-message/create">
          <v-list-item-content>
            <v-list-item-title>ثبت پیام های پیش فرض</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/admin/default-message/list">
          <v-list-item-content>
            <v-list-item-title>لیست پیام های پیش فرض</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import IconDashboard from "@/icons/Menu/IconDashboard";
import IconAcceptor from "@/icons/Menu/IconAcceptor";
import IconAgent from "@/icons/Menu/IconAgent";
import IconCategory from "@/icons/Menu/IconCategory";
import IconTicket from "@/icons/Menu/IconTicket";

import IconSale from "@/icons/Menu/IconSales"
import IconViolations from "@/icons/Menu/IconViolations"
import IconRequests from "@/icons/Menu/IconRequests"
import IconDiscount from "@/icons/Menu/IconDiscount"
import IconEye from "@/icons/Menu/IconEye"
import IconBenCard from "@/icons/Menu/IconBenCard"
import IconDefultMessage from "@/icons/Menu/IconDefultMessage"
import IconProfileEdit from "@/icons/Menu/IconProfileEdit"
export default {
  name: "Menu",
  components: {
    IconDashboard,
    IconAcceptor,
    IconAgent,
    IconCategory,
    IconTicket,
    IconSale,
    IconViolations,
    IconRequests,
    IconDiscount,
    IconEye,
    IconBenCard,
    IconDefultMessage,
    IconProfileEdit,
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