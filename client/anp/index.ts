import {startApp} from 'superdesk-core/scripts/index';
import photo from './photo';
import talpaVideo from './talpa-video'
import planningExtension from 'superdesk-planning/client/planning-extension/dist/extension';

setTimeout(() => {
  startApp(
      [planningExtension],
      {},
  );
});

export default angular.module('anp', [
  photo.name,
  talpaVideo.name
]);

