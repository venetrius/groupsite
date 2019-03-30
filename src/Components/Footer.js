import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare, faLaptop} from '@fortawesome/free-solid-svg-icons';

export default function Footer() {

  return (
      <footer class="page-footer font-small  bg-light darken-1 pt-4">
        <div class="row justify-content-start">
          
          <div class="col-12 col-md-6">
            <a href="mailto:xyz"><FontAwesomeIcon icon={ faEnvelopeSquare }/><span></span>mail to us</a>
          </div>
          <div class="col-12 col-md-6">
            <a target="blank" href="https://discordapp.com/channels/515951809752465408/515952580103372810">
              <FontAwesomeIcon icon={ faLaptop }/><span>discordapp.com</span>
            </a>
          </div>
        </div>
        <div class="footer-copyright text-center py-3">© 2019 Copyright:
            <a target="blank" href="#"> this website </a>
        </div>
      </footer>

  )

}