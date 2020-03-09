<template>
      
  <div v-if="alerts.length > 0">
    <div v-for="alert in alerts"
        :class="'alert alert-dismissible ' + alert.type">
      <button type="button" class="close" @click="removeAlert(alert)">
        &times;
      </button>
      <h4 v-if="alerts.title != null" class="alert-heading">
        {{alert.title}}
      </h4>
      <p class="mb-0">
        {{ alert.text }}
      </p>
    </div>
  </div>

</template>

<script>
export default {

  data() {
    return {
      alerts : [ ],
      count : 0,
    }
  },

  methods : {

    clear() {
      this.alerts = [ ];
    },

    removeAlert(alert) {
      this.alerts = this.alerts.filter(item => item.id !== alert.id);
    },

    addAlert(alert) {
      alert.id = ++this.count;

      this.alerts.push(alert);
    },

    addAlertSuccess(alert) {
      this.addAlert({
        title : null,
        type : 'alert-success',
        text : alert,
      });
    },

    addAlertWarning(alert) {
      this.addAlert({
        title : null,
        type : 'alert-warning',
        text : alert,
      });
    },

    addAlertDanger(alert) {
      this.addAlert({
        title : null,
        type : 'alert-danger',
        text : alert,
      });
    },

    addMessagesError(messages) {
      for (let prop in messages) {
        if (Object.prototype.hasOwnProperty.call(messages, prop)) {
          for (var i = 0; i < messages[prop].length; i++) {
            let m = messages[prop][i]
            
            this.addAlertDanger(m);
          }
        }
      }
    },
    
  },
  
}
</script>
