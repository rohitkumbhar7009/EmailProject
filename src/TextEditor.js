import React, { useState, useRef, useEffect } from 'react';
import "./email.css"
import Select from 'react-select';
import { RiAddCircleLine } from 'react-icons/ri';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { BsQuestionCircle } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const TextEditor = () => {

    const [isHelpOpen, setIsHelpOpen] = useState(false);
   

    const showToast = (message, type) => {
        toast[type](message);
    };

    
    const toggleHelp = () => {
        setIsHelpOpen(!isHelpOpen);
        // Add your logic here to toggle the help content or perform any other action
    };



    const [selectedOption, setSelectedOption] = useState('contacts'); // Default selected option

    const handleOptionChange = (value) => {
        setSelectedOption(value);
    };


    const [selectedOptions, setSelectedOptions] = useState(null);

    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];

    const handleChange = (selectedOptions) => {
        setSelectedOptions(selectedOptions);
    };

    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedShortcut, setSelectedShortcut] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredShortcuts, setFilteredShortcuts] = useState([]);
    const [inputText, setInputText] = useState('');
    const dropdownRef = useRef(null);

    const shortcuts = ['Country Name', 'Contact', 'Another Shortcut']; // Define your shortcut options here

    useEffect(() => {
        setFilteredShortcuts(shortcuts.filter(shortcut => shortcut.toLowerCase().includes(searchTerm.toLowerCase())));
    }, [searchTerm, shortcuts]);

    const handleAddShortcut = (shortcut) => {
        setInputText(prevText => prevText + `[${shortcut}]`);
        setShowDropdown(false);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setShowDropdown(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
        setSearchTerm(''); // Clear search term when showing the dropdown
    };

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };


    const [mode, setMode] = useState('wysiwyg'); // State to track the current mode

    const handleModeChange = (newMode) => {
        setMode(newMode);
    };

    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

    const onEditorStateChange = (newEditorState) => {
        setEditorState(newEditorState);
    };

    return (
        <div className="panel">
            <ToastContainer/>
            <div className="panel__header">
                <h1 className="panel__title">Create email template</h1>
            </div>
            <div className="panel__content">
                <form noValidate="">
                    <div className="form">
                        {/* Template Name */}
                        <section className="form__section">
                            <div className="form__row">
                                <div className="form__col form__col_100">
                                    <label className="_input_1k08l_1">
                                        <span className="_inputLabel_1k08l_46">Template Name</span>
                                        <div className="_field_1k08l_14" data-test="input-wrapper">
                                            <input
                                                autoCapitalize="off"
                                                className="simple-input"
                                                placeholder="Template Name"
                                                type="text"
                                             
                                                
                                                fdprocessedid="8a2zxd"
                                            />
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </section>

                        {/* Mode */}
                        <div className="m-t-15 m-b-10">
                            <h2 className="panel__subtitle d-flex flex-center-align">
                                Mode
                                <a
                                    href="#"
                                    className="help-block__link"
                                    onClick={toggleHelp}
                                >
                                    <BsQuestionCircle className={`v2-icon ${isHelpOpen ? 'active' : ''}`} color="#007bff" />
                                </a>
                                {/* Render your help content conditionally based on `isHelpOpen` state */}
                                {isHelpOpen && (
                                    <div className="help-content">
                                        {/* Your help content goes here */}
                                    </div>
                                )}
                            </h2>
                            <div className="form__row">
                                <div className="form__col form__col_100 m-t-10">
                                    <label className="radio" data-test="import-shared-radio-component">
                                        <div className="radio__header">
                                            <input
                                                className="radio__input"
                                                type="radio"
                                                data-test="shared-radio-input"
                                                value="contacts"
                                                checked={selectedOption === 'contacts'}
                                                onChange={() => handleOptionChange('contacts')}
                                            />
                                            <div className="radio__border">
                                                <div className="radio__dot"></div>
                                            </div>
                                            <div className="radio__label" data-test="shared-radio-label">
                                                Use contact shortcodes
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="form__row">
                                <div className="form__col form__col_100 m-t-15">
                                    <label className="radio" data-test="import-shared-radio-component">
                                        <div className="radio__header">
                                            <input
                                                className="radio__input"
                                                type="radio"
                                                data-test="shared-radio-input"
                                                value="account"
                                                checked={selectedOption === 'account'}
                                                onChange={() => handleOptionChange('account')}
                                            />
                                            <div className="radio__border">
                                                <div className="radio__dot"></div>
                                            </div>
                                            <div className="radio__label" data-test="shared-radio-label">
                                                Use account shortcodes
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>


                        <div className="form__row">
                            <div className="form__col form__col_100">
                                <div className="_select_5n3c2_115">
                                    <label className="_selectLabel_5n3c2_221">From</label>
                                    <div className="react-select-container css-b62m3t-container">
                                        <span id="react-select-3-live-region" className="css-7pg0cj-a11yText"></span>


                                        <div>
                                            <Select
                                                value={selectedOptions}
                                                onChange={handleChange}
                                                options={options}
                                                placeholder="Select an option"
                                                isClearable
                                            />
                                        </div>

                                        <div className="react-select__indicators css-tlfecz-indicators">
                                            <div className="react-select__indicator css-1wy0on6"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <section className="form__section">
                            <div className="form__row">
                                <div className="form__col form__col_100">
                                    <label className="_input_1k08l_1">
                                        <span className="_inputLabel_1k08l_46">Email Subject</span>
                                        <div className="_field_1k08l_14" data-test="input-wrapper">
                                            <input
                                                autoCapitalize="off"
                                                className="simple-input"
                                                placeholder="Email Subject"
                                                type="text"
                                                value={inputText + selectedShortcut}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </section>

                        <div className="form__row">

                            <button type="button" className="btn  add-shortcut-button" onClick={toggleDropdown}>
                                <RiAddCircleLine className="add-shortcut-icon" /> Add Shortcode
                            </button>
                            {showDropdown && (
                                <div className="dropdown" ref={dropdownRef}>
                                    <div className="search-bar">
                                        <input
                                            type="text"
                                            placeholder="Search shortcuts"
                                            value={searchTerm}
                                            onChange={handleSearchChange}
                                        />
                                        <button className="close-icon" onClick={toggleDropdown}>
                                            Close
                                        </button>
                                    </div>
                                    <ul>
                                        {filteredShortcuts.map((shortcut, index) => (
                                            <li key={index} onClick={() => handleAddShortcut(shortcut)}>
                                                {shortcut}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                        </div>

                        <div>
                            <div className="mode-selector">
                                <label>
                                    <input
                                        type="radio"
                                        value="wysiwyg"
                                        checked={mode === 'wysiwyg'}
                                        onChange={() => handleModeChange('wysiwyg')}
                                    />
                                    WYSIWYG
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        value="html"
                                        checked={mode === 'html'}
                                        onChange={() => handleModeChange('html')}
                                    />
                                    HTML
                                </label>
                            </div>

                            {/* WYSIWYG Editor */}
                            {mode === 'wysiwyg' && (
                               <section className="form__section">
                               <div className="form__row">
                                 <div className="form__col form__col_100">
                                   {/* Apply custom CSS to remove the border */}
                                   <Editor
                                     editorState={editorState}
                                     onEditorStateChange={onEditorStateChange}
                                     placeholder="Body"
                                     wrapperClassName="editor-wrapper"
                                     editorClassName="editor-content"
                                     toolbarClassName="editor-toolbar"
                                   />
                                 </div>
                               </div>
                             </section>
                            )}

                            {/* HTML Editor */}
                            {mode === 'html' && (
                                <section className="form__section">
                                    <div className="form__row">
                                        <div className="form__col form__col_100">
                                            <textarea
                                                className="wysiwyg"
                                                id="editor"
                                                name="editor"
                                                placeholder="Body  "
                                            ></textarea>
                                        </div>
                                    </div>
                                </section>
                            )}

                        </div>



                    </div>
                </form>

            </div>
            <div className="form__row m-t-30 d-flex">
    <div className="form__col form__col_100 d-flex">
        <button type="submit"   className="btn btn-success btn-block mr-1">
            Save & Exit
        </button>
        <button type="submit" className="btn btn-primary btn-block mr-1">
            Save
        </button>
        <button type="button" className="btn btn-secondary btn-block">
            Cancel
        </button>
    </div>
</div>
        </div>
    );
};

export default TextEditor;
