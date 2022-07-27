import React from 'react'

export const Test = () => {
  return (
    <div>
        <ul class="nav nav-pills flex flex-col md:flex-row flex-wrap list-none pl-0 mb-4" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <a href="#pills-home" class="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      px-6
      py-3
      my-2
      md:mr-2
      focus:outline-none focus:ring-0
      active
    " id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" role="tab" aria-controls="pills-home"
      aria-selected="true">Home</a>
  </li>
  <li class="nav-item" role="presentation">
    <a href="#pills-profile" class="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      px-6
      py-3
      my-2
      md:mx-2
      focus:outline-none focus:ring-0
    " id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" role="tab"
      aria-controls="pills-profile" aria-selected="false">Profile</a>
  </li>
  <li class="nav-item" role="presentation">
    <a href="#pills-contact" class="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      px-6
      py-3
      my-2
      md:mx-2
      focus:outline-none focus:ring-0
    " id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" role="tab"
      aria-controls="pills-contact" aria-selected="false">Contact</a>
  </li>

  <li class="nav-item" role="presentation">
    <a href="#pills-disabled" class="
      nav-link
      disabled
      pointer-events-none
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      px-6
      py-3
      my-2
      md:ml-2
      focus:outline-none focus:ring-0
    " id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" role="tab"
      aria-controls="pills-disabled" aria-selected="false">Disabled</a>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
    Tab 1 content
  </div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
    Tab 2 content
  </div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
    Tab 3 content
  </div>
  <div class="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab">
    Tab 4 disabled
  </div>
</div>
    </div>
  )
}
