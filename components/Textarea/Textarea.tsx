import {TextareaProps} from './Textarea.props';
import styles from './Textarea.module.css';
import {ForwardedRef, forwardRef, JSX} from 'react';
import cn from 'classnames';

export const Textarea = forwardRef(({ error, className, ...props}: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
        return (
            <div className={cn(styles.textareaWrapper, className)}>
                 <textarea
                     className={cn(className, styles.textarea, {
                         [styles.error]: error,
                     })}
                     ref={ref}
                     {...props}
                 />
                {error && <span className={styles.errorMessage}>{error.message}</span>}
            </div>
        );
    }
);
Textarea.displayName = "Textarea";