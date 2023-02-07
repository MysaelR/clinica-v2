import React from 'react';
import { useTranslation } from 'react-i18next';

import { MedicineView } from './components/MedicineView';
import { SwitchLanguage } from './components/SwitchLanguage';

const App: React.FC = () => {
  const { t } = useTranslation();
  // const { t } = useTranslation();
  


  return (
    <div style={{'position': 'relative', 'width': '100%', 'height': '100%'}}>
      <div style={{'position': 'absolute', 'right': '0', 'left': '0', 'marginTop': '20%' , 'margin': 'auto', 'width': '100px'}}>
        {t('Learn')}

      <MedicineView/>  
      </div>
      
      
      <SwitchLanguage/>
    </div>
  );
}

export default App;
