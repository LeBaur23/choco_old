<template>
  <div id="ClientReminder" class="client-reminder-wrapper w-100 d-flex justify-content-center">
    <div class="client-reminder-wrapper__content content-wrapper h-100 d-flex">
      <form class="w-100 h-100 d-flex align-items-center justify-content-center" action="#" method="post">
        <label for="client-email" class="content-wrapper--promo-text">
          Узнайте о наших акциях и скидках первым:
        </label>
        <input type="email" id="client-email" class="content-wrapper--client-email" name="client-email" placeholder="Ваш e-mail" required>
        <input type="submit" class="content-wrapper--submit" value="Подписаться">
      </form>
    </div>
  </div>
</template>
