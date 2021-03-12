;; Намалюй звичайний трикутник.
;; Класика жанру.
;; Одна відмінність, хочу, щоб у функції котра
;; рендерить трикутниу був один "опціональний параметр",
;; котрий вирішує як буде рендеритися трикутник.
;; Якщо функція викликається (tree 4) - то буде
;; номральний прямокутній трикутник котрий має згори
;; одну зірочку, знизу 4. Якщо функція буде виконуватися
;; якось так (tree 4 "U") то другий параметр каже
;; що ялинка росте догори. Дефолтним значенням має
;; бути "B" котре скаже що ялинка росте догори.
;; (defun ask-number ()
;;   (format t "Please enter number:")
;;   (let ((temp (read)))
;;     (if (evenp temp) "yes" "no")))

;; (ask-number)



             
(defun rep (num)
  (if (= num 1)
      (format t "~%")
      (rep (- num 1)))
  (prin1 '*))

(defun stars-print-up (number)
  (unless (= number 1)
    (stars-print-up(- number 1)))
  (rep number))
 
(defun stars-print-down (number)
  (rep number)
  (unless (= number 1)
    (stars-print-down (- number 1))))

(defun tree (&rest args)
  (if (= 1 (length args))
      (stars-print-up (car args))
      (stars-print-down (car args))))

(tree 4)
(print '-------)
(tree 4 'U)

(progn (print 1)
       (print 2)
       (print 3)
       (print 4)
       (print 5))


(defun compress (x)
  (if (consp x)
      (compr (car x) 1 (cdr x))
      x))

(defun compr (elt n lst)
  (if (null lst)
      (list (n-elts elt n))
      (let ((next (car lst)))
	(if (eql next elt)
	    (compr elt (+ n 1) (cdr lst))
	    (cons (n-elts elt n)
		  (compr next 1 (cdr lst)))))))

(defun n-elts (elt n)
  (if (> n 1)
      (list n elt)
      elt))

(defun uncompress (lst)
  (if (null lst)
      nil
      (let ((elt (car lst))
	    (rest (uncompress (cdr lst))))
	(if (consp elt)
	    (append (apply #'list-of elt)
		    rest)
	    (cons elt rest)))))

(defun list-of (n elt)
  (if (zerop n)
      nil
      (cons elt (list-of (- n 1) elt))))

(print (compress '(1 1 1 0 1 0 0 0 0 1)))

(print (uncompress '((3 1) 0 1 (4 0) 1)))

(print (next 2 3))

(let ((a 3) (b 4)) (+ a b))


;; Класику жанра писанини банкомату. юзери, гроші, виплати, тільки не робит транзпкцій між користувачами.
;;     (list
;;      ; (list 'LOGIN 'PASSWORD 'MONEY)
;;      (list "j" "123" 0)
;;      (list "dd" "321" 241))
;; можна додати і видалити користувача.


(setf users (list
	     (list "a" "123" 20000)
	     (list "b" "1235" 300)
	     (list "c" "0000" 100)))

(print users)

(print (car (second users)))
(print (caar (cdr users)))

(defun get-password (u) (second u))
(defun get-login (u) (first u))
(defun get-balance (u) (third u))

(defun get-money (u)
  (format t "Please enter money: ~%")
  (let ((money (read)))
    (if (> money (get-balance u))
	(print "Not enough money")
	(setf (third u) (- (get-balance u) money)))))

(defun set-money (u)
  (format t "Please enter money: ~%")
  (let ((money (read)))
    (setf (third u) (+ (get-balance u) money))))

(defun add-user ()
  (setf users (cons (list 0 0 0) users))
  (format t "Please enter name: ~%")
  (let ((name (read)))
    (setf (first (car users)) name))
  (format t "Please enter pass: ~%")
  (let ((pass (read)))
   (setf (second (car users)) pass))
  (format t "Please enter balance: ~%")
  (let ((balance (read)))
    (setf (third (car users)) balance)))

(defun delete-user ()
  (format t "Please enter login for delete user: ~%")
  (let ((name (read)))
    (setf users
     (remove-if
      (lambda (x) (equal name (first x))) users))))

(defun delete-us (name))

(defun change-pass (u)
    (format t "Please enter new pass: ~%")
    (let ((pass (read)))
      (setf (third u) pass)))

(defun show-balance (u)
  (print (get-balance u)))

(defun ask-action (user)
  (format t "Please choose number: 1-balance 2-get-money 3-set-money 4-new-pass 5-add-user 6-delete-user ~%")
  (let ((number (read)))
    (case number
      (1 (show-balance user))
      (2 (get-money user))
      (3 (set-money user))
      (4 (change-pass user))
      (5 (add-user))
      (6 (delete-user))
      (otherwise (print "Invalid input")))))

(defun find-user (name u-list)
  (if (null u-list)
      (print "invalid")
      (let ((u (car u-list)))
	(if (equal (get-login (car u-list)) name)
	    (progn
	      (print "Please enter password:")
	      (let ((pass (read)))
		(if (equal pass (get-password u))
		    (ask-action u)
		    (print "Invalid password"))))
	    (find-user name (cdr u-list))))))

(defun bankomat ()
  (print "Please enter your name:")
  (let ((name (read)))
    (find-user name users))
  (print users))


(bankomat)


