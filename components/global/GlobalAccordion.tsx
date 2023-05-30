import React, { useState } from 'react';
import Link from 'next/link';
import SearchMenu from '../features/SearchMenu';
import styles from '../styles/GlobalAccordion.module.scss';

interface AccordionState {
  expanded: boolean;
  index: number;
}

interface GlobalAccordionProps {
  className?: string;
}

const GlobalAccordion: React.FC<GlobalAccordionProps> = ({ className }) => {
  const [accordionStates, setAccordionStates] = useState<AccordionState[]>([
    { expanded: false, index: 0 },
    { expanded: false, index: 1 },
    { expanded: false, index: 2 },
    { expanded: false, index: 3 },
  ]);

  const toggleAccordion = (index: number) => {
    setAccordionStates((prevStates) => {
      const newStates = prevStates.map((state) => ({
        ...state,
        expanded: state.index === index ? !state.expanded : false,
      }));
      return newStates;
    });
  };

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term: string) => {
    setSearchTerm(term.toLowerCase());
  };

  const filteredAccordionStates = accordionStates.filter((state) =>
    state.expanded ? true : state.index.toString().includes(searchTerm)
  );

  return (
    <div className={`${styles.menuContainer} ${className}`}>
      <div className={styles.searchContainer}>
        <SearchMenu onSearch={handleSearch} />
      </div>

      {accordionStates.map((state) => {
        const sectionText = `Section ${state.index + 1}`.toLowerCase();

        return (
          <React.Fragment key={state.index}>
            {sectionText.includes(searchTerm) && (
              <>
                <div
                  className={`${styles.accordionHeader} ${state.expanded ? styles.expanded : ''}`}
                  onClick={() => toggleAccordion(state.index)}
                >
                  {`Section ${state.index + 1}`}
                </div>
                {state.expanded && (
                  <div className={styles.subMenu}>
                    <Link href="#">Sub-Link 1</Link>
                    <Link href="#">Sub-Link 2</Link>
                    <Link href="#">Sub-Link 3</Link>
                    <Link href="#">Sub-Link 4</Link>
                  </div>
                )}
              </>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default GlobalAccordion;
